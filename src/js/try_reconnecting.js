var reconect = false;

socket.on('try:reconnecting', function(id){

    reconect = true;
    

})

window.addEventListener("load", function(){
    try_re()
});

function try_re(){
    if(reconect){

    
        var str = null

        try{
            str = JSON.parse( localStorage.getItem("reconnect")  )
        } catch{}

        

        if(str){
            console.log(str.key.length);
            if( str.key.length > 0 ){
                console.log("reconnecting");
                data.key = str.key
                username = str.name
                socket.emit('game:join', {"name":str.name, "key":str.key})
            }
        }
    }
}