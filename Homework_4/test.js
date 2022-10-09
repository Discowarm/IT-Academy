const fs = require('fs');

fs.mkdir('test-folder', () => {
    fs.writeFile('./test-folder/file.txt', 'Hello', () => { })
});

// Создать папку 
fs.mkdirSync('test-folder_2');

// Cоздать папку 
fs.mkdirSync('test-folder_3');

// ==========================================================

// Copy file ================================================

async function copyFiles () {
    try {
      await fs.copy('./test-folder/file.txt', './test-folder_2/file.txt')
      console.log('success!')
    } catch (err) {
      console.error(err)
    }
  }
  copyFiles()


async function copyFiles () {
    try {
      await fs.copy('./test-folder_2/file.txt', './test-folder_3/file.txt')
      console.log('success!')
    } catch (err) {
      console.error(err)
    }
  }
  copyFiles()

// ===========================================================

// Delete files ==============================================
fs.unlinkSync('./test-folder/file.txt',() => { 
    fs.rmdirSync('./test-folder',() => { })    
})

fs.unlinkSync('./test-folder_2/file.txt',() => { 
    fs.rmdirSync('./test-folder_2',() => { })
})

fs.unlinkSync('./test-folder_3/file.txt',() => { 
    fs.rmdirSync('./test-folder_3', () => { })
})
// =============================================================

// Delete folders ===============================================
fs.rmdir('./test-folder_3/', err => {
    if(err) throw err; // не удалось удалить папку
    console.log('Папка успешно удалена');
 });



