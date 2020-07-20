const { remote } = require('electron');
const { app } = remote;
const { writeFile, readFile, readdir, access } = remote.require('fs').promises;
const { resolve } = remote.require('path');

class SettingsHandler {
  loadPaths(singlePaths, multiPaths) {
    this.singlePaths = singlePaths;
    this.multiPaths = multiPaths;
  }

  getSettingsPath() {
    const rootPath =
      process.env.NODE_ENV === 'development'
        ? app.getAppPath('userData')
        : remote.process.env.PORTABLE_EXECUTABLE_DIR;

    const path = process.env.REACT_APP_SETTINGS_PATH;

    return resolve(rootPath, path);
  }

  async getSettings() {
    try {
      const fullPath = this.getSettingsPath();
      const json = await readFile(fullPath, 'utf-8');
      const data = JSON.parse(json);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async saveSettings(data) {
    try {
      const fullPath = this.getSettingsPath();
      const json = JSON.stringify(data, null, 2);

      await writeFile(fullPath, json);
    } catch (error) {
      throw error;
    }
  }

  async isExists(dirPath) {
    try {
      await access(dirPath);
      return dirPath;
    } catch (error) {
      throw error;
    }
  }

  async parseMultiPaths(path) {
    try {
      const result = await readdir(path, {
        withFileTypes: true,
      });

      const dirs = result
        .filter((file) => file.isDirectory())
        .map(({ name }) => resolve(path, name));
      return dirs;
    } catch (error) {
      throw error;
    }
  }

  async checkingChanges(path, data) {
    try {
      const dataInFile = await readFile(path, 'utf-8');

      return dataInFile === data ? false : true;
    } catch (error) {
      throw error;
    }
  }

  async updateData(path, fullData) {
    try {
      return await Promise.allSettled(
        fullData.map(async ([server, data]) => {
          const pathToFile = resolve(path, `cfg/server/${server}.cfg`);
          await this.isExists(pathToFile);
          const isChanged = await this.checkingChanges(pathToFile, data);
          isChanged && (await writeFile(pathToFile, data));
          const message = isChanged
            ? 'Success updated'
            : 'Current data is used';
          return { pathToFile, isChanged, message };
        })
      );
    } catch (error) {
      throw error;
    }
  }

  async updateGameData(fullData) {
    try {
      const parseSinglePaths = this.singlePaths.map(({ path }) => path);

      const parseMultiPaths = await Promise.allSettled(
        this.multiPaths.map(
          async ({ path }) => await this.parseMultiPaths(path)
        )
      );

      const validMultiPaths = [];
      const invalidMultiPaths = [];

      parseMultiPaths.forEach((path) => {
        if (path.status === 'fulfilled') {
          validMultiPaths.push(...path.value);
        } else if (path.status === 'rejected') {
          invalidMultiPaths.push({
            pathToFile: path.reason.path,
            isChanged: false,
            message: 'Incorrect path',
          });
        }
      });

      const paths = [...new Set([...parseSinglePaths, ...validMultiPaths])];

      const resultUpdated = await Promise.allSettled(
        paths.map(async (path) => await this.updateData(path, fullData))
      );

      const successResult = [];
      const failResult = [...invalidMultiPaths];

      const result = resultUpdated.flatMap((res) => res.value);

      result.forEach((res) => {
        if (res.status === 'fulfilled') {
          successResult.push(res.value);
        } else if (res.status === 'rejected') {
          failResult.push({
            pathToFile: res.reason.path,
            isChanged: false,
            message: 'File not found',
          });
        }
      });

      return {
        isSuccess: true,
        successResult,
        failResult,
      };
    } catch (error) {
      return {
        isSuccess: false,
        successResult: [],
        failResult: [],
      };
    }
  }

  isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }
}

const sh = new SettingsHandler();

export default sh;
