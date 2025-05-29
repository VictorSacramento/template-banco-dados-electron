const { contextBridge, ipcRenderer } = require('electron');

contextBridge.executeInMainWorld('api' , {
    cadastrarUsuario: (nome, email) => {
        console.log("Cadastrando usuário", nome, email)

        ipcRenderer.invoke('criar-usuario', nome, email)
    }
})