const abrirBtn=document.querySelector('#abrir-pantalla-completa');
const salirBtn=document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallacompleta);
salirBtn.addEventListener('click', cerrarpantallacompleta);

function pantallacompleta(){
    document.documentElement.requestFullscreen();
}

function cerrarpantallacompleta(){
    document.exitFullscreen();
}