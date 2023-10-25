function tocaSom(idElementoAudio) {
    document.Selector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');


//Estrutura de repetição - Enquanto
for(let contador = 0;contador<listaDeTeclas;contador++) {
    const tecla=listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio= `#som_$(instrumento)`;
    console.log(idAudio);

    tecla.onclick = function(){
         tocaSom(idAudio);
    };
    tecla.onkeydown = fonction() {
        tecla.classList.add('ativa');
    }
    tecla.onkeydown = fonction() {
        tecla.classList.remove('ativa');
    }
console.log(contador);
}