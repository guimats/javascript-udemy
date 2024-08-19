// const request = obj => {

//     return new Promise((resolve, reject) => {
//         // utilizando o construtor XMLHttpRequest
//         const xhr = new XMLHttpRequest();

//         // abrindo o xhr com o obj que deve ser recebido
//         xhr.open(obj.method, obj.url, true);

//         // Caso o método forsse POST, precisaria preencher o xhr.send() com os dados a serem enviados. Como utilizaremos GET, vamos enviar em branco.
//         xhr.send();

//         // pegando o evento de carregar e verificando o status de retorno do request
//         xhr.addEventListener('load', e => {

//             // se retorno positivo
//             if (xhr.status >= 200 && xhr.status <= 300) {
//                 // resolvendo a promisse
//                 resolve(xhr.responseText);
//             }

//             // se retorno negativo
//             else {
//                 // rejeitando a promisse
//                 reject(xhr.statusText);
//             }
//         });
//     })
// };

document.addEventListener('click', e => {
    const el = e.target;

    // pegando a tag de onde ocorreu o click
    const tag = el.tagName.toLowerCase();

    // se tag for a jogamos para a função de carregar página
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    // pegando o atributo href do link
    const href = el.getAttribute('href');

    // fetch com async await
    try {
        const response = await fetch(href);
        if (response.status !== 200) throw new Error('ERRO 404');
        const html = await response.text();
        carregaResultado(html)
    } catch (e) {
        console.log(e);
    }

    // fetch com then e catch
    fetch(href)
        // pegando a resposta e retornando uma nova promise com a resposta em texto
        .then(response => {
            if (response.status !== 200) throw new Error('ERRO 404');
            return response.text();
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));
}

// exibe o resultado na tela
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

fetch('pagina1.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e));