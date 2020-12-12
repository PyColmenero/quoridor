

$(document).on('click', '.big_block', function() {

    var c_block = $(this);

    if( turn == own_player_index ){
        if( c_block.attr("jump") == "true" ){

            x_b = parseInt($(this).attr("data-y"))
            y_b = parseInt($(this).attr("data-x"))

            if(own_player_index == 1){
                x_b = 18-x_b
                y_b = 18-y_b
            }
                

            own_play_pos = [x_b, y_b]
            
            socket.emit('movement:player', {"key" : key,
                                            "coords": own_play_pos,
                                            "player": own_player_index})
            turn = false
            change_status()

            loading_interval = setTimeout(function(){
                loading = false
                change_status()
            },500)
                    
        }

        $(".innerblock").attr("id","")
        selections = [-1,-1]
    }
})


// $("#ownt_player").click(function(){

//     if(turn == own_player_index){

//         var is_colindant = false;
//         if(own_play_pos[0] == ownt_play_pos[0] && own_play_pos[1] == ownt_play_pos[1] - 2){
//             is_colindant = true
//         }
//         if(own_play_pos[0] == ownt_play_pos[0] && own_play_pos[1] == ownt_play_pos[1] + 2){
//             is_colindant = true
//         }
//         if(own_play_pos[1] == ownt_play_pos[1] && own_play_pos[0] == ownt_play_pos[0] - 2){
//             is_colindant = true
//         }
//         if(own_play_pos[1] == ownt_play_pos[1] && own_play_pos[0] == ownt_play_pos[0] + 2){
//             is_colindant = true
//         }
        
//         if(is_colindant){
//             console.log(own_play_pos);
//             console.log(ownt_play_pos);



//         } else {
//             console.log("non");
//         }

//     }
    

// })