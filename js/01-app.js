const notificarBtn=document.querySelector('#notificar');

notificarBtn.addEventListener('click', () =>{
    Notification
        .requestPermission()
        .then(resultado=>{
            console.log('El resultado es', resultado );
        });
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        new Notification('Esta es la notificacion', {
            icon: 'img/chems.jpg',
            body: 'Codigo con Angel'
        });

        /*notificacion.onclick = function(){
            window.open('https://github.com/Luis-Angel-Santos')
        }*/
    }
});