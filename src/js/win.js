

var gameover = $("#gameover")
var gameoverp = $("#game_over")
var players_list = $("#players_list")

function prove_win(){

    did_i_win(0,1,1, 0, data.index)
    did_i_win(1,1,17, 1, data.index)
    if(data.max_players == 4){
        did_i_win(2,0,1, 2, data.index)
        did_i_win(3,0,17, 3, data.index)
    }

}

function did_i_win(x,y, coor, index, myindex ){


    if(data.coordinates[x][y] == coor ){
        //Player 1 Won
        if(index != myindex){
            gameoverp.html( data.names[index] + " ganó.")
        } else {
            gameoverp.html( "Has ganado." )
        }
        
        gameover.css("display","flex")

        var names_str = ""
        for(var z = 0; z < data.names.length; z++){
            if(data.names[z].length >= 3){
                if(data.names[z] == data.names[index]){
                    names_str += "<b>"+data.names[z] + "</b> <br>"
                } else {
                    names_str += data.names[z] + " <br>"
                }
            }
        }

        players_list.html( names_str )

        localStorage.setItem("reconnect", "" )
    }

}
