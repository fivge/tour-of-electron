const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // __dirname 字符串指向当前正在执行脚本的路径 (在本例中，它指向你的项目的根文件夹)。
      preload: path.join(__dirname, 'main-app/preload.js'),
    },
  });

  ipcMain.handle('ping', () => 'pong');

  win.loadFile('./renderer-app/dist/index.html');
};

// 窗口无法在 ready 事件前创建
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 在Windows和Linux上，关闭所有窗口通常会完全退出一个应用程序。
// 为了实现这一点，你需要监听 app 模块的 'window-all-closed' 事件。如果用户不是在 macOS(darwin) 上运行程序，则调用 app.quit()。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
