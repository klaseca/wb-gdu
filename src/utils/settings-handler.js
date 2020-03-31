const { remote } = require('electron');
const { app } = remote;
const { writeFile, readFile, readdir } = remote.require('fs').promises;
const { resolve } = remote.require('path');

class SettingsHandler {
  getFullPath() {
    const rootPath =
      process.env.NODE_ENV === 'development'
        ? app.getAppPath('userData')
        : remote.process.env.PORTABLE_EXECUTABLE_DIR;

    const path = process.env.REACT_APP_SETTINGS_PATH;

    return resolve(rootPath, path);
  }

  async read() {
    try {
      const fullPath = this.getFullPath();
      const json = await readFile(fullPath, 'utf-8');
      const data = JSON.parse(json);

      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async save(data) {
    try {
      const fullPath = this.getFullPath();
      const json = JSON.stringify(data, null, 2);

      await writeFile(fullPath, json);
    } catch (error) {
      console.log(error);
    }
  }

  async parseMultiPaths(path) {
    try {
      const result = await readdir(path, {
        withFileTypes: true
      });
      const dirs = result
        .filter(file => file.isDirectory())
        .map(({ name }) => resolve(path, name));
      return dirs;
    } catch (error) {
      console.error(error);
    }
  }

  async updateGameData(fullData) {
    try {
      const { singlePaths, multiPaths } = await this.read();

      const parseSinglePaths = singlePaths.map(({ path }) => path);

      const parseMultiPaths = await Promise.all(
        multiPaths.map(async ({ path }) => await this.parseMultiPaths(path))
      );

      const rawPaths = new Set([...parseSinglePaths, ...parseMultiPaths.flat()]);

      const paths = [...rawPaths];

      for (const path of paths) {
        for (const [server, data] of fullData) {
          const pathToFile = resolve(path, `cfg/server/${server}.cfg`);
          await writeFile(pathToFile, data);
        }
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }
}

export default new SettingsHandler();
