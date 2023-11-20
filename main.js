// a funcão que deve ser executada e tocaSom, mas que toca som? Nesse caso,
// será o parâmetro idElementoAudio. Ou seja, o endereço da tecla será
// procurado no html e reproduzido.

function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
// se o elemento pesquisado for igual a "inexistente", o aleta de
 // elemento não encontrado aparecerá.
    if(elemento === null){
        alert('elemento não encontrado');}
// se o elemnto existir, a função play daquele elemento acontecerá,ou 
// seja, a tecla será reproduzida.
    if(elemento && elemento.localName === 'audio'){
    elemento.play();
    }else {
        alert('Elemento não encontrado');
    }
}
//querySelector encontra as informaçoes daa tecla pesquisada no documento.
const listaDeTeclas = document.querySelectorAll('.tecla');
//estrutura de repetição -enquanto
// para que as teclas sejam repetidas de maneira infinita, criamos o
// for, com valor  de inicio 0, e o valor e o valor final chamado de contador <
// listaDeTeclas.length,para que a repetição seja exatamente do tamanho da nossa 
// lista;que e de 9 teclas.
for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    // claslist armazena todas as informações do elemento pesquisado.
    const instrumento = tecla.classList[1];
    // i idEAudio é reponsável por identificar o som do botão pesquisando.
    // uma função é responsável por identificar o som do botão pesquisado.
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);
    // onclick significa " ao clicar na tela " a função tocaSom será
    // executada; i id daquele audio será buscado e reproduzido.

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    // onkeydown significa" quando a tecla estiver pressionada",nesse caso
    // uma função será executada, qual é essa função? É a estilização de
    // mudança de cor do botao quando nas teclas enter e space forem apertadas.

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code ==='space'){
        tecla.classList.add('ativa');
    //onkeyup significa "quando a tecla estiver erguida, não pressionada",
    // nesse caso, a função será removida.
    }
    };
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    };
    console.log(instrumento);
    console.log(contador);
};       