
var status_element  = $("#turn_text")
var players_element = $("#players_text")
var loading_element = $(".loading_text")
var loading_gif_ingame = $("#loading_gif_ingame")

function change_status(){

    var is_turn = (!data.names[data.turn]) ? 'Turno de...' : 'Turno de: ' + data.names[data.turn]

    var names_str = ""

    for(var x = 0; x < data.names.length; x++){
        if(data.names[x].length >= 3){
            names_str += data.names[x] + ": " + data.paddings[x] + " pieces <br>"
        }
        
    }

    status_element.html(is_turn + "<br>")
    players_element.html( names_str )

    if( !loading ){
        loading_gif_ingame.css("top","50%")
        loading_gif_ingame.css("opacity","100%")
    } else {
        loading_gif_ingame.css("top","0")
        loading_gif_ingame.css("opacity","0%")
    }
    

}


