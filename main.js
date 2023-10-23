function tocaSom(idElementoAudio) {
    document.Selector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');

let contador =0;
//Estrutura de repetição - Enquanto
for(let contador = 0;contador <listaDeTeclas;contador++) {
    const tecla=listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio= `#som_$(instrumento)`;
    console.log(intrumento);

    tecla.onclick = function(){
        tocaSom(idAudio);
        
    };
}
tecla.classList.add('ativa');