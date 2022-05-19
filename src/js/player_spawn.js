


function set_players(coor, element, mov){
    
    var current_block = $("#"+coor[1]+"_"+coor[0])

    // diferencias de pixeles entre el tableto y el block 
    var x_difference = current_block.offset().top - table_map.offset().top
    var y_difference = current_block.offset().left - table_map.offset().left

    // porcentaje de Top y Left para CSS
    var x_por = 100 / ( table_map.outerWidth() / x_difference )
    var y_por = 100 / ( table_map.outerWidth() / y_difference )

    element.css("top", x_por+"%" )
    element.css("left", y_por+"%" )

}