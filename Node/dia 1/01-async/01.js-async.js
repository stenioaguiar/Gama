/*
1. Buscar clientes
2. Buscar endereço
3. Buscar telefone

mostrar NomeCliente, Endereco, Telefone

para rodar uma app
node nomeDoArquivo.js
no vsCode F5

CALLBACK utilizado para sincronizar aplicações;

callbacks tem como objetivo passar uma função e executar após o agendamento

callbacks - geramente recebem 2 params
1 erro -> qualquer problema
2 sucesso -> o resultado esperando
*/



function buscarCliente(id, callback) {
    //setTimeout simula uma função assíncrona
    setTimeout(() => {
        return callback(null, {
            id: id,
            nome: 'Xuxa da silva',
            idade: 70
        })
    }, 2000)
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

function buscarEndereco (idCliente, callback) {
    setTimeout(() => {
        return callback (null, {
            id: 0,
            rua: 'dos bobos',
            numero: 0
        })
    },2000)
}

function main() {
    const cliente = buscarCliente('xuxa', (erro, sucesso) => {
        if (erro) {
            //undefined, 0, ``, {}, null, [] -> false
            console.error('DEU RUIM', erro)
            return
        }
        
        buscarEndereco(sucesso.id, (erro1, sucesso1) => {
            if(erro1) {
                console.error('DEU RUIM', erro1)
            return;
            }
            buscarTelefone(sucesso.id, (erro2, sucesso2) =>{
                if(erro2) {
                    console.erro('DEU RUIM', erro2)
                    return;
                }
                
                console.log(`
                    Nome: ${sucesso.nome}
                    Endereco: ${sucesso1.rua} ${sucesso1.numero}
                    Telefone: (${sucesso2.ddd}) ${sucesso2.numero}`)
            } )
        })
    })
}

main();
