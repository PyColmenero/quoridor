
join_room_b = $("#join_room_b")
key_in = $("#key_in")


join_room_b.click(function(){

    error.text("")
    
    if(key_in.val().length == 6){
        data.key = key_in.val()
        error.html('<img src="src/medias/loading1.gif">')

        socket.emit('game:join', {"name":username, "key":data.key})
    } else {
        error.text("Key rooms are 6 chars length")
    }
    

    
})

socket.on('error:join', function(str){

    if(str == "0"){
        show_waiting(username + ", you joined the room.")
    } else {
        error.html( str )
        get_av_rooms()
    }
    
    localStorage.setItem("reconnect", "" )

})