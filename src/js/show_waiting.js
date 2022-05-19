priv = $("#priv")
key_element = $("#key_span")

function show_waiting(first_msg){

    set_name_e.css("display","none")
    create_game.css("display","none")
    join_game.css("display","none")
    loading_room.css("display","flex")

    game_created_username.html( first_msg )

    priv.html( (privacity=="pri") ? "Privado" : "Público" )

    key_element.text(data.key)

    error.text("Waiting for players...")

}