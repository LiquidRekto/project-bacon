const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

var port = process.env.port | 3000;


const eApp = express();
const server = http.createServer(eApp);
const io = new Server(server);

var WINDOWS = [];

var CURRENT_WIN = null;


eApp.use(express.static(path.join(__dirname, 'resources')));


eApp.engine('html', require('ejs').renderFile);
eApp.set('view engine','html');

eApp.set('views',path.join(__dirname, 'resources/views'));


eApp.get('/', (req, res) => {
   res.render('base');
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  CURRENT_WIN = new BrowserWindow({
    width: 1280,
    height: 720,
    show: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      webSecurity: false,
      webgl: true
    }
  });

  // and load the index.html of the app.
  CURRENT_WIN.loadURL(`http://localhost:${port}`);

  CURRENT_WIN.once('ready-to-show', () => {
    CURRENT_WIN.show();
  });

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// SOCKET.IO Connections
io.on('connection', (socket) => {
   console.log('A device has connected!');

   socket.on('ev-minimize', () => {
    CURRENT_WIN.minimize();
   });

   socket.on('ev-togglemaximize', () => {
    if (!CURRENT_WIN.isMaximized()) {
      CURRENT_WIN.maximize();
    } else {
      CURRENT_WIN.unmaximize();
    }
  });

  socket.on('ev-closewin', () => {
    CURRENT_WIN.close();
  });

  socket.on('screen-change', () => {
    var bounds = CURRENT_WIN.getBounds();
    socket.emit('screen-change-reply', {width: bounds.width, height: bounds.height});
  });
});



server.listen(port, () => {
   console.log(`Server listening on port ${port}...`);
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
