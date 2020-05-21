/*
0 obter usuario
1 obter o numero de um usuario a partir do seu id
2 obter o endereco do usuario pelo id
*/

function obterUsuario() {
    // quando der algum problema -> reject (ERRO)
    // quando sucess -> RESOLV
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {

            //return reject(new Error('DEU RUIM DE VERDADE!'))

            return resolve({
                id: 1,
                nome: "Andressa",
                dataNascimento: new Date()
            })
        },1000);
    });
   
};

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '99999999',
            ddd: 81
        })
    }, 2000);

};

function obterEndereco(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {

        setTimeout(() => {
            return resolve({
                rua: 'Ruralinda',
                numero: 1
            })
            
        }, 2000);
    })

};

const usuarioPromise = obterUsuario();

// padrao callback (erro,sucesso)
// para manipular sucesso usamos a funcao .then
// para manipular erros usamos o .catch
//usuario => telefone => telefone

usuarioPromise
    .then(function (usuario){
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then (function(resultado) {
        console.log('resultado', resultado)

    })
    .catch (function (error) {
        console.log('DEU RUIM', error)
    });

// obterUsuario(function resolverUsuario(error, usuario) {
//     if (error) {
//         console.error('DEU RUIM em USUARIO', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error1) {
//             console.error('DEU RUIM em TELEFONE', error)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error2) {
//                 console.error('DEU RUIM em ENDERECO', error)
//                 return;
//             }
            
//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua}, ${endereco.numero},
//                 Telefone: ${telefone.ddd}, ${telefone.telefone}
//             `);
//         });
//     })
// });
//12:00