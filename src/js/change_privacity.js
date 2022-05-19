
var loading_priv = false;

priv.click(function(){
    
    if(username == users[0] && !loading_priv ){
        socket.emit('game:privacity', key_element.text())
        priv.html( '<img id="loading_gif" src="src/medias/loading1.gif">' )

        loading_priv = true
    }

})



socket.on('game:privacity_change', function(pri){

    loading_priv = false
    priv.text( pri )

})