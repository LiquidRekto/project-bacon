var socket = io();

var minimizeBtn = document.getElementById('nav-minimizebtn');
var toggleMaximize = document.getElementById('nav-maximizebtn');
var closeBtn = document.getElementById('nav-closebtn');
var menuBtn = document.getElementById('nav-menubtn');
var dbCloseBtn = document.getElementById('db-close');

var dashboardNavs = document.getElementsByClassName('nav-db');

var frameWindow = document.getElementById('content-frame');

socket.emit("screen-change");
socket.on('screen-change-reply',(data) => {
    frameWindow.width = data.width;
    frameWindow.height = data.height;
});





var dashboard = document.getElementById('dashboard-menu');

minimizeBtn.addEventListener('click', () => {
    socket.emit('ev-minimize');
});

toggleMaximize.addEventListener('click', () => {
    socket.emit("screen-change");
    socket.emit('ev-togglemaximize');
});

closeBtn.addEventListener('click', () => {
    socket.emit('ev-closewin');
});

menuBtn.addEventListener('click', () => {
    dashboard.classList.add('block');
    dashboard.classList.remove('hidden');
});

dbCloseBtn.addEventListener('click', () => {
    dashboard.classList.add('hidden');
    dashboard.classList.remove('block');
});

Array.from(dashboardNavs).forEach((btn) => {
    btn.addEventListener('click', () => {
        switch(btn.value) {
            case "nav-home":
                frameWindow.src="views/components/home.html";
                break;
            case "nav-chilldemo":
                break;
            case "nav-strictdemo":
            case "nav-loadtest":
                frameWindow.src="views/components/loadtest.html";
                break;
        }
        dashboard.classList.add('hidden');
        dashboard.classList.remove('block');
    });
});

