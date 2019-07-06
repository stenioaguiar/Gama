/*
o callback funciona mas torna dificl de manioular conforme a aplicação cresce
para manioular funções de forma assincrona, temos a classe Promise

-> trabalhos com estados
    -> toda alteração retorna uma função
-> quando criamos uma promise
    -> pending
-> quando temos um erro
    -> rejected
-> quanto tems um sucesso
    -> success/ fullfiled
-> uma promise sempre retorna outra promise

promise = new Promise ((reslve, reject) => {
    return reject(valor) => erro
    return success(valor) => sucesso    
})

para capturar resultados
promise
    -> resultado -> .then
    -> error -> .catch
    -> finally -> .finally (pode não estar disponivel ainda)

*/

// importamos o modulo interno do Node.js para converter callbacks em Promise
//IMPORTANTE: cao a funcão não siga a onvenção(erro, sucesso), não será feita a conversão

//const util = require('util')
//util.promisify
// para extrair somente o necessario
// {nome da chave = objeto}
// DESTRUCTURING

const { promisify } = require('util')

// convertemos buscarTelefone

const buscarTelefoneAsync = promisify(buscarTelefone)

function buscarCliente(id) {
    // setTimeout simula uma função assíncrona
    // retornamos um objeto promise para resolver depois

    return new Promise ((resolve, reject) => {
        
        setTimeout(() => {
            return resolve({
                id: id,
                nome: 'Xuxa da silva',
                idade: 70
            })
        }, 2000)
    })
}

function buscarEndereco (idCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 0,
                rua: 'dos bobos',
                numero: 0
            })
        },2000)
        
    })
}

function buscarTelefone(idCliente, callback) {
    setTimeout(() => {
        return callback (null, {
            id: 1,
            ddd: 11,
            numero: '4002-8900'
        })
    },3000)
}


function main() {
    const clientesPromise = buscarCliente('xuxa')
    clientesPromise.then(cliente => {
       const clienteID = cliente.id
       return buscarEndereco(clienteID)
       .then(endereco => {
           return{
               id: cliente.id,
               nome: cliente.nome,
               endereco: `${endereco.rua} ${endereco.numero}`
           }
       })
    })
    .then( clienteEndereco => {
        const { id }  = clienteEndereco

        return buscarTelefoneAsync(id)
        .then (telefone => {
            // para clonar um objeto e reutilizar todas as chaves adicionando o necessário
            return {
                ...clienteEndereco,
                telefone: `(${telefone.ddd}) ${telefone.numero}`,
            }
        })
    })
    .then((resultado) => {
        console.log('resultado', resultado)
    })
    .catch(error => {
        console.error("Deu ruim", error)
    })
}

main();
