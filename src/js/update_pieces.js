var table_padding_up = $("#table_padding_up")
var table_padding_down = $("#table_padding_down")
var table_padd_up = $("#table_padd_up")

function update_pieces(){

    set_map_walls()

    set_padding_walls(table_padd_up, ownt_padding_walls)
    set_padding_walls(table_padding_down, padding_walls)


    set_players(own_play_pos, own_player)
    set_players(ownt_play_pos, ownt_player)

    $(".big_block").removeAttr("jump")
    if(turn == own_player_index) set_colindant_bblocks()
    

}

// var walls_not_setted_0 = (map_size[0]+1)
// var walls_not_setted_1 = (map_size[0]+1)

function set_colindant_bblocks(){

    var own_x = own_play_pos[1]
    var own_y = own_play_pos[0]

    var ownt_x = ownt_play_pos[1]
    var ownt_y = ownt_play_pos[0]

    if(own_player_index == 1){
        // own_x = 18-own_x
        // own_y = 18-own_y
        // ownt_x = 18-ownt_x
        // ownt_y = 18-ownt_y
    }


    var select_x = 0;
    var select_y = 0;

    if(data_map_walls[own_x + 1][own_y] == 0 ){
        // is no hay player delante
        if( !(own_x + 2 == ownt_x && own_y == ownt_y) ){

            select_x = (own_player_index==0) ? own_x + 2    : 18-(own_x + 2)
            select_y = (own_player_index==0) ? own_y        : 18-own_y
            var row = generatetable.children().eq( select_x )
            var current_block = row.children().eq( select_y )
            current_block.attr("jump","true")

        } else { // si sí hay player
            // si no hay pared ahí
            if( data_map_walls[own_x + 3][own_y] == 0 ){

                select_x = (own_player_index==0) ? own_x + 4    : 18-(own_x + 4)
                select_y = (own_player_index==0) ? own_y        : 18-own_y
                var row = generatetable.children().eq( select_x )
                var current_block = row.children().eq( select_y )
                current_block.attr("jump","true")

            } else { // si sí hay pared en frente
                //si hay una pared en el lado
                if( data_map_walls[own_x + 2][own_y - 1] == 0 ){

                    select_x = (own_player_index==0) ? own_x + 2    : 18-(own_x + 2)
                    select_y = (own_player_index==0) ? own_y - 2    : 18-(own_y - 2)
                    var row = generatetable.children().eq( select_x )
                    var current_block = row.children().eq( select_y )
                    current_block.attr("jump","true")
                }
                if( data_map_walls[own_x + 2][own_y + 1] == 0 ){

                    select_x = (own_player_index==0) ? own_x + 2    : 18-(own_x + 2)
                    select_y = (own_player_index==0) ? own_y + 2    : 18-(own_y + 2)
                    var row = generatetable.children().eq( select_x )
                    var current_block = row.children().eq( select_y )
                    current_block.attr("jump","true")
                }
            }
            
        }
    }

    // is no hay muro en medio
    if(data_map_walls[own_x - 1][own_y] == 0 ){
        // is no hay player delante
        if(  !(own_x-2 == ownt_x && own_y == ownt_y) ){

            select_x = (own_player_index==0) ? own_x - 2    : 18-(own_x - 2)
            select_y = (own_player_index==0) ? own_y        : 18-own_y 
            var row = generatetable.children().eq( select_x)
            var current_block = row.children().eq( select_y )
            current_block.attr("jump","true")

        } else {
            // si sí hay player
            if( data_map_walls[own_x - 3][own_y] == 0 ){

                select_x = (own_player_index==0) ? own_x - 4    : 18-(own_x - 4)
                select_y = (own_player_index==0) ? own_y        : 18-own_y 
                var row = generatetable.children().eq( select_x)
                var current_block = row.children().eq( select_y )
                current_block.attr("jump","true")
            } else {

                if( data_map_walls[own_x - 2][own_y - 1] == 0 ){

                    select_x = (own_player_index==0) ? own_x - 2    : 18-(own_x - 2)
                    select_y = (own_player_index==0) ? own_y - 2    : 18-(own_y - 2)
                    var row = generatetable.children().eq( select_x )
                    var current_block = row.children().eq( select_y )
                    current_block.attr("jump","true")
                }
                
                if( data_map_walls[own_x - 2][own_y + 1] == 0 ){

                    select_x = (own_player_index==0) ? own_x - 2    : 18-(own_x - 2)
                    select_y = (own_player_index==0) ? own_y + 2    : 18-(own_y + 2)
                    var row = generatetable.children().eq( select_x )
                    var current_block = row.children().eq( select_y )
                    current_block.attr("jump","true")
                }
            }
        }
    }

    // de izquierda a derecha
    //si no hay pared enfrente
    if(data_map_walls[own_x][own_y + 1] == 0){
        if(  !(own_x == ownt_x && own_y + 2 == ownt_y) ){

            select_x = (own_player_index==0) ? own_x        : 18-own_x 
            select_y = (own_player_index==0) ? own_y + 2    : 18-(own_y + 2)
            var row = generatetable.children().eq( select_x)
            var current_block = row.children().eq( select_y )
            current_block.attr("jump","true")

        } else {

            if( data_map_walls[own_x ][own_y + 3] == 0 ){

                select_x = (own_player_index==0) ? own_x        : 18-own_x 
                select_y = (own_player_index==0) ? own_y + 4    : 18-(own_y + 4)
                var row = generatetable.children().eq( select_x)
                var current_block = row.children().eq( select_y )
                
                current_block.attr("jump","true")
            } else {

                if( data_map_walls[own_x + 1][own_y + 2] == 0 ){

                    select_x = (own_player_index==0) ? own_x + 2    : 18-(own_x + 2)
                    select_y = (own_player_index==0) ? own_y + 2    : 18-(own_y + 2)
                    var row = generatetable.children().eq( select_x )
                    var current_block = row.children().eq( select_y )
                    current_block.attr("jump","true")
                }

                
                if( data_map_walls[own_x - 1][own_y + 2] == 0 ){

                    select_x = (own_player_index==0) ? own_x - 2    : 18-(own_x - 2)
                    select_y = (own_player_index==0) ? own_y + 2    : 18-(own_y + 2)
                    var row = generatetable.children().eq( select_x )
                    var current_block = row.children().eq( select_y )
                    current_block.attr("jump","true")
                }

            }

        }
        
    } 



    if(data_map_walls[own_x][own_y - 1] == 0){

        if(  !(own_x == ownt_x && own_y - 2 == ownt_y) ){

            select_x = (own_player_index==0) ? own_x        : 18-own_x 
            select_y = (own_player_index==0) ? own_y - 2    : 18-(own_y - 2)
            var row = generatetable.children().eq( select_x )
            var current_block = row.children().eq( select_y )
            
            current_block.attr("jump","true")
        } else {

            if( data_map_walls[own_x ][own_y - 3] == 0 ){

                select_x = (own_player_index==0) ? own_x        : 18-own_x 
                select_y = (own_player_index==0) ? own_y - 4    : 18-(own_y - 4)
                var row = generatetable.children().eq( select_x )
                var current_block = row.children().eq( select_y )
                
                current_block.attr("jump","true")
            } else {

                if( data_map_walls[own_x + 1][own_y - 2] == 0 ){

                    select_x = (own_player_index==0) ? own_x + 2    : 18-(own_x + 2)
                    select_y = (own_player_index==0) ? own_y - 2    : 18-(own_y - 2)
                    var row = generatetable.children().eq( select_x )
                    var current_block = row.children().eq( select_y )
                    current_block.attr("jump","true")
                }

                
                if( data_map_walls[own_x - 1][own_y - 2] == 0 ){

                    select_x = (own_player_index==0) ? own_x - 2    : 18-(own_x - 2)
                    select_y = (own_player_index==0) ? own_y - 2    : 18-(own_y - 2)
                    var row = generatetable.children().eq( select_x )
                    var current_block = row.children().eq( select_y )
                    current_block.attr("jump","true")
                }

            }

        }
        
    } 

}