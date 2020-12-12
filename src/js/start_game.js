socket.on('game:data', function(data){

    //console.log(data)

    all.css("display","block")
    created_room.css("display","none")
    login.css("display","none")

    // get turn
    turn = data[1]["turn"]

    // get player Index
    if(own_player_index != 0) own_player_index = 1
    if(own_player_index != 0) ownt_player_index = 0

    // get own player element
    // own_player = (own_player_index != 0) ? $("#own_player") : $("#ownt_player")
    // ownt_player = (own_player_index != 0) ? $("#ownt_player") : $("#own_player")
    
    own_player = $("#own_player")
    ownt_player = $("#ownt_player")

    // get own player usernames
    own_username = data[0][own_player_index]
    ownt_username = data[0][ownt_player_index]

    // get own and ownt coordinates
    own_play_pos    = data[1]["player_coors"][own_player_index]
    ownt_play_pos   = data[1]["player_coors"][ownt_player_index]
    
    // get map SIZE
    map_size        = data[1]["map_size"]

    // get data map
    data_map_walls  = data[1]["data_map_walls"]
    
    // get paddings walls
    padding_walls       = data[1][ "paddings" ][own_player_index]
    ownt_padding_walls  = data[1][ "paddings" ][ownt_player_index]
    
    // change own player element color
    $("#own_player").css("background","orange")

    generate_table()
    update_pieces()
    change_status()
});