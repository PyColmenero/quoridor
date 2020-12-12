free_rooms = $("#free_rooms")
socket.on('load:rooms', function(data){

    var rooms_str = ""
    for(var x = 0; x < data.length; x++){
        rooms_str += "<div class='disable-select room'> <p>" + data[x][0] 
        rooms_str += "</p> <p class='join_button' data-key='"+data[x][1]+"'> Join </p> </div>"
    }
    free_rooms.html(rooms_str)

})

$(document).on('click', '.join_button', function() {
    key_in.val( $(this).attr("data-key") )
    
    play_button_click()

})
