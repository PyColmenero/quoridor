const socket = io(); // 'https://g-quoridor.herokuapp.com/'

var loading = true;
var loading_interval;

var offline = false;

var gameover = $("#gameover")
var gameoverp = $("#game_over")

var login = $("#login")


$( document ).ready(function() {
    login.css("display","block")
});


socket.on('get_data', function(data){

    turn = data["turn"]

    own_play_pos = data["player_coors"][own_player_index]
    ownt_play_pos = data["player_coors"][ownt_player_index]

    data_map_walls = data["data_map_walls"]

    padding_walls = data["paddings"][own_player_index]
    ownt_padding_walls = data["paddings"][ownt_player_index]

    loading = true

    update_pieces()
    change_status()

    clearTimeout(loading_interval);

    $(".innerblock").attr("id","")
    selections = [-1,-1]

    // did i won?
    if(own_player_index == 0){
        if(own_play_pos[1] == 1){
            gameoverp.html("Ganastes a " + ownt_username)
            gameover.css("display","flex")
        }
        if(ownt_play_pos[1] == 17){
            gameoverp.html(ownt_username + " te ganó.")
            gameover.css("display","flex")
        }
    } else {
        if(own_play_pos[1] == 17){
            gameoverp.html("Ganastes a " + ownt_username)
            gameover.css("display","flex")
        }
        if(ownt_play_pos[1] == 1){
            gameover.css("display","flex")
            gameoverp.html(ownt_username + " te ganó.")
        }
    }
    
    
    
})











function double_reverse(data){

    var arr = []
    for(var x = 0; x < data.length; x++){
        arr.push([])
        for(var y = 0; y < data[0].length; y++){
        
            arr[x].push(data[x][y])

        }
    }


    arr.reverse()
    for(var x = 0; x < arr.length; x++){
        arr[x].reverse()
    }
    return arr;
}

var status_element = $("#status")
var players_element = $("#players_s")
var loading_element = $("#loading")
function change_status(){

    var is_turn = (turn == own_player_index) ? 'Tu turno' : 'Turno del oponente'
    var is_load = (loading) ? "" : " - Loading..."

    status_element.html(is_turn)
    players_element.html( own_username + " VS " + ownt_username )
    loading_element.html(is_load)

}



var key;

var own_player_index
var ownt_player_index

var turn
var own_username, ownt_username

var map_size

var data_map_walls
var own_play_pos
var ownt_play_pos

var padding_walls
var ownt_padding_walls

var own_player
var ownt_player

if(offline) socket.emit('new_game', "pycolmenero")

