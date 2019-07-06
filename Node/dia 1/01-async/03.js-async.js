/*
vindo do C#
não precisamos usar .then e .catch

o codigo javascript fica igual aplicaçoes JAVA, Python, C#
O código será executado na ordem que é lido

*/

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

// para usar o await precisamos do async
// quando usamos o async, automaticamente a funcção passa a retornar um objeto Promise
async function main() {

    try {
        console.time('async-01')
        //para sinalizar ao codigo javascript
        //para esperar a execuçao terminar usamos a palavra chave await
        const cliente = await buscarCliente('xuxa')
        //const {rua, numero} = await buscarEndereco(cliente.id)
        //const telefone = await buscarTelefoneAsync(cliente.id)
        // endereco e telefone não dependem um do outro, podemos executa-los em segundo plano
        // .all resove um array de promises, pega o resultado de todas de uma só vez

        const telefonePromise = buscarTelefoneAsync(cliente.id)
        const enderecoPromise = buscarEndereco(cliente.id)

        // retorna um arrau na ordem exata das funcoes 
        const [telefone, {rua, numero}] = await Promise.all([
            telefonePromise,
            enderecoPromise
        ])

        /* 
        respostas[0] dados telefone
        respostas[1] dados endereco
        */
        console.log(`Nome: ${cliente.nome} 
        Endereco: ${rua} ${numero} 
        Telefone: ${telefone.numero}`)
        console.timeEnd('async-01')
    }
    catch(erro) {
        console.error('DEU RUIM', erro)
    }
}

main();
