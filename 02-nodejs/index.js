/*
0 obter usuario
1 obter o numero de um usuario a partir do seu id
2 obter o endereco do usuario pelo id
*/

function obterUsuario(callback) {
    seiTimeout(function () {
        return callback(null,{
            id: 1,
            nome: "Andressa",
            dataNascimento: new Date()
        })
    },2000);
};

function obterTelefone(idUsuario) {
    setTimeout(() => {
        return {
            telefone: '99999999',
            ddd: 81
        }
    }, 2000);

};

function obterEndereco(idUsuario) {

};

//padrao callback (erro,sucesso)
function resolverUsuario(erro, usuario){
    console.log('usuario', usuario);    
};

obterUsuario(resolverUsuario);
//const telefone = obterTelefone(usuario.id);

console.log('usuario', usuario);
//console.log('telefone', usuario);

//9:15