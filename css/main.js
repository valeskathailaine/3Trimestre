function tocaSom(idElementoaudio){
    document.querySelector(idElementoaudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');
//estrutura de repetição - enquanto
for(let contador = 0;contador<listaDeTeclas.length;contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);
    console.log(instrumento);

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code ==='space)'{
        tecla.classList.add('ativa');
    }
    };
    tecla.onkeydown = function() {
        tecla.classList.remove('ativa');
    };
    console.log(contador);
};