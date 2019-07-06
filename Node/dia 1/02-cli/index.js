/* para instalar pacotes externos usamos a ferramenta NPM ( Node Package Manager) 
ou YARN (criado pelo FB)

para iniciar um projeto node.js, precisamos de um arquivo que define os pacotes.
Contém informações sobre versões e instalação

npm init
-> -y => não precisa de wizard
para trabalhar com programas de linhas de comando
usaremos o comander

npm install commander
--save
--save-dev -> ferramentas como transpiladores, testes, ferramentas para diminuir o tamando do arquivo
*/

// importar o cammander
// importar o Heroi
const Heroi = require('./src/heroiEntidade')
const Commander = require('commander')

const commander = Commander
                    .version ('v1.0')                    
                    .option('-n, --nome [value]', 'O nome do Heroi')
                    .option('-i, --idade [value]', 'A idade do Heroi')
                    .option('-I, --id [value]', 'O id do Heroi')
                    .option('-p, --poder [value]', 'O Poder do Heroi')
                    .option('-c, --cadastrar', 'deve cadastrar um Heroi')
                    .option('-a, --atualizar [value]', 'Deve atualizar o heroi')
                    .option('-r, --remover', 'Deve remover o heroi')
                    .option('-l, --listar', 'Deve listar os herois')
                    .parse(process.argv)

function main() {
    const heroi = new Heroi(commander)

    //node index.js --cadastrar
    //node index.js --c

    /*
    node index.js --nome Flash --poder Velocidade --idade 80 --cadastrar
    */
    if(commander.cadastrar) {
        console.log('chamou cadastrar',heroi)
        return
    }
    if(commander.atualizar) {
        console.log('chamou atualizar',heroi)
        return
    }
    if(commander.remover) {
        console.log('chamou remover',heroi)
        return
    }
    if(commander.listar) {
        console.log('chamou listar',heroi)
        return
    }
}
main();