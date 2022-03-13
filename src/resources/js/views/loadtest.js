var socket = io();



var importArea = document.getElementById('file-import-area');

importArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.stopPropagation();
});

importArea.addEventListener('dragenter', (event) => {
    console.log('File is in the Drop Space');
    importArea.classList.toggle("lt-import-area");
    importArea.classList.toggle("lt-import-area-highlighted");
});
 
importArea.addEventListener('dragleave', (event) => {
    console.log('File has left the Drop Space');
    importArea.classList.toggle("lt-import-area-highlighted");
    importArea.classList.toggle("lt-import-area");
});


importArea.addEventListener('drop', (event) => {
    event.preventDefault();
    event.stopPropagation();

    importArea.classList.toggle("lt-import-area");
    importArea.classList.toggle("lt-import-area-highlighted");
 
    for (const f of event.dataTransfer.files) {
        // Using the path attribute to get absolute file path
        console.log('File Path of dragged files: ', f.path);
        alert('Load success! Loaded file path: ' + f.path);
      }
});