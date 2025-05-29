const { app, BrowserWindow, ipcMain } = require('electron')
const mysql = require('mysql2/promise')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preLoad: './preload.js',
      contextIsolation: true
    }
  })

  win.loadFile('pages/index.html')
}

async function conectarBancoDados(){
  var conexao = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'electron_db'
  })
}

ipcMain.handle('criar-usuário', async function(event, nome, email) {
  var conexao = await conectarBancoDados()

  var criarUsuarioSQL = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)'

  var resultado = await conexao.execute(criarUsuarioSQL, [nome, email])
  console.log('Resultado', resultado)
} )



app.whenReady().then(() => {
  createWindow()
})