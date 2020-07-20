process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

const { app, BrowserWindow } = require('electron');

const { join } = require('path');
const isDev = require('electron-is-dev');

let mainWindow;
let preloadWindow;

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 700,
    minWidth: 600,
    minHeight: 650,
    maxWidth: 800,
    maxHeight: 800,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${join(__dirname, './../build/index.html')}`
  );

  if (isDev) {
    await installExtensions();
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => (mainWindow = null));

  mainWindow.webContents.on('did-finish-load', () => {
    if (preloadWindow) {
      preloadWindow.close();
    }

    mainWindow.show();
  });
}

function createPreloadWindow() {
  preloadWindow = new BrowserWindow({
    width: 300,
    height: 400,
    frame: false,
    resizable: false,
    show: false
  });

  preloadWindow.loadURL(
    isDev
      ? `file://${join(__dirname, './loading.html')}`
      : `file://${join(__dirname, './../build/loading.html')}`
  );

  preloadWindow.on('closed', () => (preloadWindow = null));

  preloadWindow.webContents.on('did-finish-load', () => preloadWindow.show());
}

app.on('ready', () => {
  createPreloadWindow();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
