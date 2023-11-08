function tocaSom(idElementoaudio){
    const elemento = document.querySelector(idElementoaudio);
    if (elemento == null) {
        alert('elemento não encontrado');

    }

    if (elemento != null && elemento.localName === 'áudio'){
    elemento.play();
    }else {
        alert('elemento não encontrado');
    }
}

const listaDeTeclas=document.querySelectorAll('.tecla');
//estrutura de repetição - enquanto
for(let contador = 0;contador<listaDeTeclas.length;contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code ==='space'){
        tecla.classList.add('ativa');
    }
    };
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    };
    console.log(instrumento);
    console.log(contador);
};       