/*
0 obter usuario
1 obter o numero de um usuario a partir do seu id
2 obter o endereco do usuario pelo id
*/

// importamos um modulo interno do node.js
const util = require('util');
const obterenderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    // quando der algum problema -> reject (ERRO)
    // quando sucess -> RESOLV
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: "Andressa",
                dataNascimento: new Date()
            });
        },1000);
    });
   
};

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve ({
                telefone: '99999999',
                ddd: '81'
            });
        }, 2000);
    });
}

function obterEndereco(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: 'Ruralinda',
                numero: '1',
                barrio: 'Dois Irmãos',
                cidade: 'Recife'
            })
        }, 2000);
    })
};

main();
// add async => automaticamente retorna uma promisse
async function main() {
    try {
        console.time('medida-promise');
        const usuario = await obterUsuario();
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ]);
        const telefone = resultado[0];
        const endereco = resultado[1];
        console.log(`
            Nome: ${usuario.nome},
            Telefone: ${telefone.ddd}, ${telefone.telefone},
            Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.barrio}, ${endereco.cidade}
        `)
        console.timeEnd('medida-promise');
    }
    catch(error) {
        console.log('deu erro', error);
    }
};