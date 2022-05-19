var inner_wall = $(".inner_wall")
var walls = $("#walls")

var selections = [-1,-1]



$(document).on('click', '.innerblock', function() {
    
    $(this).attr("data-s","true")

    if(data.paddings[data.index] > 0){
        if(data.turn == data.index || turn_hack){

            // hay ya una pared ahí?
            if( !$(this).attr("data-selec") ){

                // select red
                $(this).attr("data-s","wall_selected")

                index_wall = [parseInt($(this).attr("data-x")),parseInt($(this).attr("data-y"))]
                console.log();

                // seleccionar ambos walls para direccion
                if(selections[0] == -1){

                    selections[0] = index_wall
                    

                } else { // segun seleccion
                    
                    if(selections[1] == -1){
                        
                        console.log($(this).attr("data-selec"));

                        // horizontal selection
                        if( (selections[0][0] == index_wall[0] + 2 && selections[0][1] == index_wall[1] ) || (selections[0][0] == index_wall[0] - 2 && selections[0][1] == index_wall[1] ) ){

                            selections[1] = index_wall     
                            set_datawall(true, selections)

                        // vertical selection
                        } else if( (selections[0][1] == index_wall[1] + 2 && selections[0][0] == index_wall[0] ) || (selections[0][1] == index_wall[1] - 2 && selections[0][0] == index_wall[0] ) ) {

                            selections[1] = index_wall
                            set_datawall(false, selections)
            
                            
                        }
                    
                        selections = [-1,-1]

                    } else {
                        selections = [index_wall, -1]
                    }

                    $(".innerblock").removeAttr("data-s")
                }
            }

        } else {
            $(".innerblock").removeAttr("data-s")
        }
    } else {
        $(".innerblock").removeAttr("data-s")
    }

});

function set_datawall(hv, select){

    var is_trap = true;

    trap()

    if(is_trap){

        var is_valid = false
        var indexes = []


        if(hv){

            // guardar coordenada X u Y de ambas paredes
            indexes.push( select[0][0] )
            indexes.push( select[1][0] )

            // calcular el punto medio entre esas dos
            var middle = (select[1][0] > select[0][0]) ? select[1][0] - 1 : select[0][0] - 1

            indexes.push( middle )

            // si hay
            if(data.map_matrix[ middle ][ select[0][1] ] == 0 ){
                for(var index = 0; index < 3; index++){
                    data.map_matrix[ indexes[index] ][ select[0][1] ] = 2
                }
                is_valid = true
            }
            
        } else {
            indexes.push( select[0][1] )
            indexes.push( select[1][1] )
            var middle = (select[1][1] > select[0][1]) ? select[1][1] - 1 : select[0][1] - 1
            indexes.push( middle )

            if(data.map_matrix[ select[0][0] ][ middle ] == 0){
                for(var index = 0; index < 3; index++){
                    data.map_matrix[ select[1][0] ][indexes[index] ] = 2
                }

                is_valid = true
            }

            
        }
    }


    if(is_valid){

        socket.emit('movement:walls', {"key":data.key, "map":data.map_matrix, "index":data.index})

        data.turn = -1
        loading = false
        change_status()
    }
}

function trap(){

    //console.log(data["names"][data.index])
    if(data.index == 0){

        // X, 1

    } else if(data.index = 1) { 
        
        // X, 17

    } else if(data.index = 2) { 
        
    } else if(data.index = 3) { 
        
    }

}