var inner_wall = $(".inner_wall")
var walls = $("#walls")

var selections = [-1,-1]
var sellection_type = -1

var h_wall_str = '<div class="horizontal_wall"></div>'
var v_wall_str = '<div class="vertical_wall"></div>'


$(document).on('click', '.innerblock', function() {
    
    inner_wall = $(".innerblock")
    inner_wall.attr("id","")

    if(padding_walls > 0){
        if(turn == own_player_index || offline){

            // select red
            $(this).attr("id","wall_selected")


            index_wall = [parseInt($(this).attr("data-x")),parseInt($(this).attr("data-y"))]
            
            // seleccionar ambos walls para direccion
            if(selections[0] == -1){

                selections[0] = index_wall

                console.log(selections);

            } else { // segun seleccion
                
                if(selections[1] == -1){
                    
                    // horizontal selection
                    if( (selections[0][0] == index_wall[0] + 2 && selections[0][1] == index_wall[1] ) || (selections[0][0] == index_wall[0] - 2 && selections[0][1] == index_wall[1] ) ){

                        selections[1] = index_wall     
                        set_datawall(true, selections)

                        console.log("-");
                    } else {

                         // vertical selection
                        if( (selections[0][1] == index_wall[1] + 2 && selections[0][0] == index_wall[0] ) || (selections[0][1] == index_wall[1] - 2 && selections[0][0] == index_wall[0] ) ) {
                        //if(selections[0][1] == index_wall[1] + 2 || selections[0][1] == index_wall[1] - 2){

                            selections[1] = index_wall
                            set_datawall(false, selections)
        
                        } 
                        
                    }
                   

                    console.log(selections);

                    selections = [-1,-1]

                } else {
                    selections = [index_wall, -1]
                }

                inner_wall.attr("id","")
            }

        }
    }
});

function set_datawall(hv, select){

    var is_valid = false
    var indexes = []

    if(own_player_index == 1){
        select = [ [  18-select[0][0],18-select[0][1]  ] , [  18-select[1][0],18-select[1][1]  ] ]
    }

    if(hv){
        indexes.push( select[0][0] )
        indexes.push( select[1][0] )
        var middle = (select[1][0] > select[0][0]) ? select[1][0] - 1 : select[0][0] - 1
        indexes.push( middle )

        console.log(middle,select[0][1])
        console.log(data_map_walls[ select[0][1] ][ middle ])

        //if( data_map_walls[ select[0][1] ][ middle ] == 0 ){

            if(data_map_walls[ middle ][ select[0][1] ] == 0 ){
                for(var index = 0; index < 3; index++){
                    data_map_walls[ indexes[index] ][ select[0][1] ] = 2
                }
                
                is_valid = true
                console.log("yes")
            } else {
                console.log("no")
            }
        //}
        
    } else {
        indexes.push( select[0][1] )
        indexes.push( select[1][1] )
        var middle = (select[1][1] > select[0][1]) ? select[1][1] - 1 : select[0][1] - 1
        indexes.push( middle )
        
        console.log(select);
        console.log(middle)
        console.log(data_map_walls[ middle ][ select[0][0] ])

        //if(  data_map_walls[ middle ][ select[0][0] ] == 0 ){

            if(data_map_walls[ select[0][0] ][ middle ] == 0){
                for(var index = 0; index < 3; index++){
                    data_map_walls[ select[1][0] ][indexes[index] ] = 2
                }

                is_valid = true
                console.log("yes")
            } else {
                console.log("no")
            }

        //}
    }

    if(is_valid){

        if(!offline) socket.emit('movement:map', {"key":key, "map":data_map_walls, "index":own_player_index})

        turn = false
        change_status()

        loading_interval = setTimeout(function(){
            loading = false
            change_status()
        },500)

    }
        
    update_pieces()
}