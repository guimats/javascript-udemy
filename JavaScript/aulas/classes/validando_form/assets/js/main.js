class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    // criando um método para capturar o evento de envio
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    // prevenindo o evendo de envio e chamando método de validação dos campos
    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.isValidFields();
        const validPasswords = this.isValidPasswords();

        if (validFields && validPasswords) {
            alert('Formulario enviado')
            this.formulario.submit();
        }
    }

    isValidPasswords() {
        let valid = true;

        const senha = this.formulario.querySelector('#senha');
        const rep_senha = this.formulario.querySelector('#rep-senha');

        if (senha.value != rep_senha.value) {
            valid = false;
            this.createError(senha, '*Campos senha e repetir senha precisam ser iguais');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.createError(senha, '*Senha precisa ter entre 6 a 12 caracteres');
        }

        return valid;
    }

    // validando os campos
    isValidFields() {
        let valid = true;

        // removendo todas as mensagens de erros (para evitar duplicação)
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        // verificando campo por campo
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.createError(campo, `*Campo "${label}" não pode estar vazio`);
                valid = false;
                continue;
            }

            if (campo.id == 'cpf') {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.id == 'usuario') {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.validarCpf()) {
            this.createError(campo, '*CPF inválido');
            return false;
        }

        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, '*Usuário precisa ter entre 3 a 12 caracteres');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(campo, '*Nome de usuário pode conter apenas letras ou números');
            valid = false;
        }
        return valid;
    }

    // método para criação de erro
    createError(campo, msg) {
        const div = document.createElement('div');

        div.innerHTML = msg;
        div.classList.add('error-text');

        campo.insertAdjacentElement('afterend', div);
    }


}

const valida = new ValidaFormulario();