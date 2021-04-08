const { app, BrowserWindow } = require('electron')
const path = require("path");
const isDev = require("electron-is-dev");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadURL(
    isDev
    ? 'https://localhost:3000'
    : `file://${path.join(__dirname, "../build/index.html")}` 
  )

  if (isDev) win.webContents.openDevTools()
}

if (isDev) app.commandLine.appendSwitch('ignore-certificate-errors')

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows.length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})