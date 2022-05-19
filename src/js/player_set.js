

$(document).on('click', '.big_block', function() {

    var c_block = $(this);

    if( data.turn == data.index || turn_hack ){
        if( c_block.attr("jump") == "true" ){

            x_b = parseInt($(this).attr("data-y"))
            y_b = parseInt($(this).attr("data-x"))

            data.coordinates[data.index] = [x_b, y_b]
            
            socket.emit('movement:player', {"key" : data.key,
                                            "coords": data.coordinates})
            

            data.turn = (data.max_players == data.turn-1) ? 0 : data.turn+1
            loading = false
            change_status()

            // loading_interval = setTimeout(function(){
            //     loading = false
            //     change_status()
            // },500)
                    
        }

        $(".innerblock").removeAttr("data-s")
        selections = [-1,-1]
    }
})