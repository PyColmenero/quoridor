var play_button = $("#play_button")
var username = $("#username")
var key_in = $("#key_in")

var all = $("#all")
var created_room = $("#created_room")

var game_created_username = $("#game_created_username")
var game_created_key = $("#game_created_key")

var error = $(".error")

var username_str = ""

// Play button
play_button.click(function(){

    play_button_click()

})

function play_button_click(){
    if(username.val().length >= 3   ){
        if((key_in.val().length == 6 || key_in.val().length == 0)){

            username_str    = username.val()
            username_str = username_str[0].toUpperCase() + username_str.substring(1,username_str.length)

            if(key_in.val()){
                key = key_in.val()
                socket.emit('join_game', {name:username_str, key:key})

                error.html("Joining game...")
            } else {
                socket.emit('new_game', username_str)
                error.html("Creating game...")
            }

            
        } else {
            error.html("Key is 6 chars length, let it empty for create a game")
        }
        
    } else {
        error.html("Username too short")
        console.log("short");
    }
}


// var letters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZQQQQQQQQQ0123456789"
// key_in.on("keyup", function(){
//     key_code = key_in.val()
//     key_in.val( key_code.toUpperCase() )
// })



// waiting for other player
socket.on('game:created', function(data){

    key = data[0]
    own_player_index = 0
    ownt_player_index = 1
    
    login.css("display","none")
    created_room.css("display","flex")
    game_created_username.html(data[1] + ", game created!")
    game_created_key.html("Key: <span id='key'>" + key + "</span>")

    if(offline) socket.emit('join_game', {"name":"pycolmenero", "key":key})
});

socket.on('game:deleted', function(data){

    gameoverp.html(ownt_username + " se desconectó.")
    gameover.css("display","flex")

})