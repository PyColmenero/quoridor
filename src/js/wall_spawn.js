
// function set_padding_walls(element, ammount){
//     element.html("")
//     for(var x = 0; x < ammount; x++){
//         element.html( element.html() +  "<div class='padding_wall'></div>")
//     }
// }

var data_map
function set_map_walls(mov){


    if(mov == "1") wsounds[ Math.round(Math.random()*(wsounds.length-1)) ].play()

    $(".sblock").removeAttr("data-selec")

    for( var x = 0; x < data.map_matrix.length; x++){
        for( var y = 0; y < data.map_matrix[0].length; y++){
            
            if(data.map_matrix[x][y] == 2){
                $( "#"+x+"_"+y ).attr("data-selec","true")
            }

        }   
    }


    

}