'use strict'

function mudarCor(){
    const cor = document.getElementById('colors').value;

    if(cor == 'amarelo'){
        document.body.style.backgroundColor = '#ffff00';
    }else if(cor == 'cinza'){
        document.body.style.backgroundColor = '#808080';
    }else if(cor == 'roxo'){
        document.body.style.backgroundColor = '#960CCD';
    }else if(cor == 'marrom'){
        document.body.style.backgroundColor = '#935010';
    }else if(cor == 'ciano'){
        document.body.style.backgroundColor = '#00ffff';
    }else if(cor == 'magenta'){
        document.body.style.backgroundColor = '#ff00ff';
    }else if(cor == 'preto'){
        document.body.style.backgroundColor = '#000000';
    }else if(cor == 'laranja'){
        document.body.style.backgroundColor = '#ffa500';
    }else if(cor == 'turquesa'){
        document.body.style.backgroundColor = '#40e0d0';
    }else if(cor == 'rosa'){
        document.body.style.backgroundColor = '#ffc0cb';
    }
}

document.getElementById('button1').addEventListener('click', mudarCor);
