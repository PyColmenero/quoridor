
socket.on('game:deleted', function(name){

    if(name != username){
        gameoverp.html(name + " se desconectó.")
        gameover.css("display","flex")
    }

})

/*

    Se desconecta solo

    salir del juego sin reiniciar

    
*/