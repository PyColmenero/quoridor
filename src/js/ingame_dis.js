

socket.on('ingame:desconnection', function(gdata){

    var gone_id = -1;

    for(let x = 0; x < players.length; x++){
        if( data.names[x] == gdata.name ){
            gone_id = x;
        }
    }


    data.names  = gdata.names
    data.turn   = gdata.turn

    update_pieces()
    change_status(-1)

    players[gone_id].children().eq(0).children().eq(0).text( "" ) //.attr("data-gone","true")
    players[gone_id].attr("data-gone","true") //
    //delete players[gone_id]

})


socket.on('ingame:connection', function(names){

    loading_gif_ingame.css("top","0")
        loading_gif_ingame.css("opacity","0%")
        
    data.names = names;

    for(var x = 0; x < data.max_players; x++){
        if(players[x]){
            
            // añadir nombre
            if(players[x].attr("data-gone") == "true") {

                players[x].removeAttr("data-gone")
                players[x].children().eq(0).children().eq(0).text( data.names[x] )

                x = 10;

            }

        }
    }

    
    update_pieces(-1)
    change_status()

})

