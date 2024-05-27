const { app, BrowserWindow } = require('electron');

const path = require('node:path');

const createWindow = () => {
const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
    });

  win.loadFile('views/menu.html');
}

app.whenReady().then(() => {
  createWindow();

  // Close on linux and windows...
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });  

  // Close and reopen on MAC
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});




