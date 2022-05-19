
create_room_b = $("#create_room_b")
var privacity = -1
var users

create_room_b.click(function(){

    var players = (two_in.attr("data-s") == "0") ? 2 : 4
    privacity = (private_in.attr("data-s") == "0") ? "pri" : "pub"

    error.html('<img src="src/medias/loading1.gif">')
    socket.emit('game:new', {"name":username, "map_size":9, "max_players":players, "privacity":privacity})

    
})


var game_created_username = $("#game_created_username")
var game_created_key = $("#game_created_key")

// waiting for other player
socket.on('game:created', function( key ){

    error.text("")

    data.key = key
    data.index = 0

    users = [username]
    list_connections.html(JSON.stringify( users ))

    show_waiting( username + ", game created!" )


    //if(offline) socket.emit('join_game', {"name":"pycolmenero", "key":key})
});
