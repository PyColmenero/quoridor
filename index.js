const path = require('path');
const express = require('express')
const app = express();

// settings
app.set('port', process.env.PORT || 3000)

// Static Files
app.use(express.static( path.join(__dirname) ) )

// Start Server
const server = app.listen(app.get('port'), () => {
    console.log("Server Start at port " + app.get('port'))
})

var SocketIO = require('socket.io')
var io = SocketIO(server)

var games = {}
var users = {}
var map_size = [9,9]

new_map(19, 19)

io.on('connection', (socket) => {

    send_data_rooms()

    socket.on('new_game', (username) => {

        var key;
        do{ key = new_game_key() } while (games[key])
        
        games[key] = [[username],{}]
        users[socket.id] = key

        send_data_rooms()

        socket.join(key)
        io.sockets.in(key).emit('game:created',[key, username], socket.id)

    })


    socket.on('join_game', (data) => {
        
        // si existe la sala
        var key = data.key
        if(games[key]){
            // si no está llena
            if(games[key][0].length != 2){

                socket.join(key)

                games[key][0].push(data.name)

                // Crear sala
                games[key][1] =    {"turn": 0, 
                                    "map_size": [9,9],
                                    "player_coors": [[9,17],[9,1]],
                                    "data_map_walls": new_map(19,19),
                                    "paddings": [10,10]
                                    }

                users[socket.id] = key
                send_data_rooms()

                io.sockets.in(key).emit('game:data',games[key], socket.id)
            } else {
                console.log("Full game");
            }
        } else {
            console.log("This key does not exist");
        }
    })


    socket.on('movement:player', (data) => {

        var key = data["key"]
        games[ key ][1]["player_coors"][data["player"]] = data["coords"]
        games[key][1]["turn"] = (games[key][1]["turn"] == 0) ? 1 : 0

        io.sockets.in(key).emit('get_data', games[ key ][1])

    })

    socket.on('movement:map', (data) => {

        
        var key = data["key"]
        games[ key ][1]["data_map_walls"] = data["map"]
        games[key][1]["turn"] = (games[key][1]["turn"] == 0) ? 1 : 0
        if(games[key][1]["paddings"][data["index"]] > 0) games[key][1]["paddings"][data["index"]] -= 1

        io.sockets.in(key).emit('get_data', games[ key ][1])

    })



    socket.on('disconnect', () => {
        
        var id = socket.id
        var key_game = users[id]
        io.sockets.in( key_game ).emit('game:deleted', "" , id)

        for (var key in users) {
            if(users[key] == key_game){
                delete users[key]
            }
        }
        delete games[ key_game ];

        send_data_rooms()
        
    });


})



function send_data_rooms(){

    var rooms = []
    for (var key in games) {
        if(!games[key][0][1]){
            rooms.push( [games[key][0][0], key] )
        }
    }

    io.emit("load:rooms", rooms );

}






function new_game_key(){
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZQQQQQQQQQ0123456789"
    var key = ""

    for(var x = 0; x < 6; x++){
        key += letters[Math.floor(Math.random() * 26)]
    }

    return key;
}

function new_map(xsize, ysize){
    var arr = []
    for(let x = 0; x < xsize; x++){   
        
        arr.push([])

        if(x%2 == 0){
            for(let y = 0; y < ysize; y++){
                arr[x].push(0)
            }
        } else {
            for(let y = 0; y < ysize; y++){
                if(y%2 != 0){
                    arr[x].push(1)
                } else {
                    arr[x].push(0)
                }
            }
       }
    }
    
    return arr
}


//git push heroku master
