

function set_padding_walls(element, ammount){
    element.html("")
    for(var x = 0; x < ammount; x++){

        element.html( element.html() +  "<div class='padding_wall'></div>")

    }
}

var data_map
function set_map_walls(){

    $(".sblock").removeAttr("data-selec")

    if(own_player_index == 1){
        data_map = double_reverse(data_map_walls) 
    } else {
        data_map = data_map_walls
    }

    for( var x = 0; x < data_map.length; x++){
        for( var y = 0; y < data_map[0].length; y++){
            
            if(data_map[x][y] == 2){

                var row = generatetable.children().eq(x)
                var current_intowall = row.children().eq( y )
                
                current_intowall.attr("data-selec","true")
            }

        }   
    }
}

function set_current_wall(x, y){

    // // diferencias de pixeles entre el tableto y el wall 
    // var x_difference = current_intowall.offset().top - table_map.offset().top
    // var y_difference = current_intowall.offset().left - table_map.offset().left

    // // porcentaje de Top y Left para CSS
    // var x_por = 100 / ( table_map.outerWidth() / x_difference )
    // var y_por = 100 / ( table_map.outerWidth() / y_difference )

    // var style = (hv) ? "horizontal_wall" : "vertical_wall"
    // walls.html( walls.html() + '<div class="'+style+'" style="top: '+x_por+'%; left: '+y_por+'%" ></div>' )
}