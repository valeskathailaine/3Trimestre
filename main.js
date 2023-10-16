function tocaSom(idElementoAudio) {
    document.Selector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');
let contador =0;
//Estrutura de repetição - Enquanto
while(contador <listaDeTeclas.length){
    const tecla=listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio'#som_$(instrumento)';
    console.log(intrumento);
    tecla.onclick = function(){
        tocaSom('#som_tecla_splash');
    };
contador = contador + 1;
console.log(contador);
}