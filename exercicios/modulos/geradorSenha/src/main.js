import './assets/css/style.css';

import GerarSenha from './assets/modules/GerarSenha';


document.addEventListener('click', e => {
    const el = e.target;

    if (el.classList.contains('btn-gerar')) {
        e.preventDefault();
        let tamanhoSenha = document.querySelector('#qtda-input').value;
        const senhaResultado = document.querySelector('.senha-resultado');

        const geradorSenha = new GerarSenha();
        const novaSenha = geradorSenha.criarSenha(tamanhoSenha);

        if (novaSenha) senhaResultado.innerText = novaSenha;
    }

})

