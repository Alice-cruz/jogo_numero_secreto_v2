let numeroSecreto = gerarNumeroAleatorio();
let qtdTentativas = 1;
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = qtdTentativas > 1 ? 'tentativas' : 'tentativa';
        let palavraAcerto = `Voce acertou o numero secreto com ${qtdTentativas} ${palavraTentativa}!`;
        mensagemTag('h1', 'Parabéns, você acertou!');
        mensagemTag('p', palavraAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;

    } else
        if (chute > numeroSecreto) {
            mensagemTag('p', 'O número secreto é menor');
        }
        else {
            mensagemTag('p', 'O número secreto é maior');
        }
    qtdTentativas++;
    limparCampo();
}
// essa funcao recebe dois parametros, um tag e um texto onde vamos selecionar uma tag HTML e alterar seu conteudo
function mensagemTag(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    mensagemTag('h1', 'Bem-vindo ao jogo do numero secreto');
    mensagemTag('p', 'Digite um numero entre 1 e 10');
    }

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    qtdTentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparCampo();
}