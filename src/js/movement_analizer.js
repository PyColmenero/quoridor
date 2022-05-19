function set_colindant_bblocks() {

    var own_x = data.coordinates[data.index][1]
    var own_y = data.coordinates[data.index][0]

    for (let j = 0; j < data.max_players; j++) {
        data.map_matrix[data.coordinates[j][1]][data.coordinates[j][0]] = 5
    }

// 0 EMPTU
// 5 PLAYER


    if (data.map_matrix[own_x + 2]) {

        if (data.map_matrix[own_x + 1][own_y] == 0) {
            // is no hay player delante
            if (data.map_matrix[own_x + 2][own_y] != 5) {

                $("#" + (own_x + 2) + "_" + own_y).attr("jump", "true")

            } else { // si sí hay player
                // si no hay pared ahí

                if (data.map_matrix[own_x + 3][own_y] == 0) {

                    if (data.map_matrix[own_x + 4]) {
                        if (data.map_matrix[own_x + 4][own_y] == 1) {
                            $("#" + (own_x + 4) + "_" + own_y).attr("jump", "true")
                        } else {
                            //si hay una pared en el lado
                            if (data.map_matrix[own_x + 2][own_y - 2]) {
                                if (data.map_matrix[own_x + 2][own_y - 1] == 0) {
                                    if (data.map_matrix[own_x + 2][own_y - 2] == 1) {
                                        $("#" + (own_x + 2) + "_" + (own_y - 2)).attr("jump", "true")
                                    }
                                }
                            }
                            if (data.map_matrix[own_x + 2][own_y + 2]) {

                                if (data.map_matrix[own_x + 2][own_y + 1] == 0) {
                                    if (data.map_matrix[own_x + 2][own_y + 2] == 1) {
                                        $("#" + (own_x + 2) + "_" + (own_y + 2)).attr("jump", "true")
                                    }
                                }
                            }
                        }
                    }

                } else { // si sí hay pared en frente
                    //si hay una pared en el lado
                    if (data.map_matrix[own_x + 2][own_y - 2]) {
                        if (data.map_matrix[own_x + 2][own_y - 1] == 0) {
                            if (data.map_matrix[own_x + 2][own_y - 2] == 1) {
                                $("#" + (own_x + 2) + "_" + (own_y - 2)).attr("jump", "true")
                            }
                        }
                    }
                    if (data.map_matrix[own_x + 2][own_y + 2]) {

                        if (data.map_matrix[own_x + 2][own_y + 1] == 0) {
                            if (data.map_matrix[own_x + 2][own_y + 2] == 1) {
                                $("#" + (own_x + 2) + "_" + (own_y + 2)).attr("jump", "true")
                            }
                        }
                    }
                }

            }
        }
    }


    // is no hay muro en medio
    if (data.map_matrix[own_x - 2]) {


        if (data.map_matrix[own_x - 1][own_y] == 0) {

            // is no hay player delante
            if (data.map_matrix[own_x - 2][own_y] != 5) {

                $("#" + (own_x - 2) + "_" + own_y).attr("jump", "true")

            } else {
                // si sí hay player

                // si no hay muro
                if (data.map_matrix[own_x - 3][own_y] == 0) {

                    if (data.map_matrix[own_x - 4]) {
                        if (data.map_matrix[own_x - 4][own_y] == 1) {
                            $("#" + (own_x - 4) + "_" + (own_y)).attr("jump", "true")
                        } else {

                            if (data.map_matrix[own_x - 2][own_y - 2]) {
                                if (data.map_matrix[own_x - 2][own_y - 1] == 0) {
                                    if (data.map_matrix[own_x - 2][own_y - 2] == 1) {

                                        $("#" + (own_x - 2) + "_" + (own_y - 2)).attr("jump", "true")
                                    }
                                }
                            }

                            if (data.map_matrix[own_x - 2][own_y + 2]) {
                                if (data.map_matrix[own_x - 2][own_y + 1] == 0) {
                                    if (data.map_matrix[own_x - 2][own_y + 2] == 1) {
                                        $("#" + (own_x - 2) + "_" + (own_y + 2)).attr("jump", "true")
                                    }
                                }
                            }
                        }
                    }

                } else {

                    if (data.map_matrix[own_x - 2][own_y - 2]) {
                        if (data.map_matrix[own_x - 2][own_y - 1] == 0) {
                            if (data.map_matrix[own_x - 2][own_y - 2] == 1) {

                                $("#" + (own_x - 2) + "_" + (own_y - 2)).attr("jump", "true")
                            }
                        }
                    }

                    if (data.map_matrix[own_x - 2][own_y + 2]) {
                        if (data.map_matrix[own_x - 2][own_y + 1] == 0) {
                            if (data.map_matrix[own_x - 2][own_y + 2] == 1) {
                                $("#" + (own_x - 2) + "_" + (own_y + 2)).attr("jump", "true")
                            }
                        }
                    }
                }
            }
        }
    }

    // de izquierda a derecha
    //si no hay pared enfrente
    if (data.map_matrix[own_x][own_y + 2]) {
        if (data.map_matrix[own_x][own_y + 1] == 0) {
            if (data.map_matrix[own_x][own_y + 2] != 5) {
                $("#" + (own_x) + "_" + (own_y + 2)).attr("jump", "true")
            } else {
                if (data.map_matrix[own_x][own_y + 3] == 0) {

                    if (data.map_matrix[own_x][own_y + 4]) {
                        if (data.map_matrix[own_x][own_y + 4] == 1) {
                            $("#" + (own_x) + "_" + (own_y + 4)).attr("jump", "true")
                        } else {
                            if (data.map_matrix[own_x + 2]) {
                                if (data.map_matrix[own_x + 1][own_y + 2] == 1) {
                                    if (data.map_matrix[own_x + 2][own_y + 2] == 0) {
                                        $("#" + (own_x + 2) + "_" + (own_y + 2)).attr("jump", "true")

                                    }
                                }
                            }
                            if (data.map_matrix[own_x - 2]) {
                                if (data.map_matrix[own_x - 1][own_y + 2] == 1) {
                                    if (data.map_matrix[own_x - 2][own_y + 2] == 0) {
                                        $("#" + (own_x - 2) + "_" + (own_y + 2)).attr("jump", "true")

                                    }
                                }
                            }

                        }
                    }
                } else {

                    if (data.map_matrix[own_x + 2]) {
                        if (data.map_matrix[own_x + 1][own_y + 2] == 0) {
                            if (data.map_matrix[own_x + 2][own_y + 2] == 1) {
                                $("#" + (own_x + 2) + "_" + (own_y + 2)).attr("jump", "true")

                            }
                        }
                    }
                    if (data.map_matrix[own_x - 2]) {
                        if (data.map_matrix[own_x - 1][own_y + 2] == 0) {
                            if (data.map_matrix[own_x - 2][own_y + 2] == 1) {
                                $("#" + (own_x - 2) + "_" + (own_y + 2)).attr("jump", "true")

                            }
                        }
                    }

                }

            }

        }
    }


    if (data.map_matrix[own_x][own_y - 2]) {

        if (data.map_matrix[own_x][own_y - 1] == 0) {
            if (data.map_matrix[own_x][own_y - 2] != 5) {

                $("#" + (own_x) + "_" + (own_y - 2)).attr("jump", "true")

            } else {
                if (data.map_matrix[own_x][own_y - 3] == 0) {
                    if (data.map_matrix[own_x][own_y - 4]) {
                        if (data.map_matrix[own_x][own_y - 4] == 1) {
                            $("#" + (own_x) + "_" + (own_y - 4)).attr("jump", "true")
                        } else {

                            if (data.map_matrix[own_x + 2]) {
                                if (data.map_matrix[own_x + 1][own_y - 2] == 0) {
                                    if (data.map_matrix[own_x + 2][own_y - 2] == 1) {
                                        $("#" + (own_x + 2) + "_" + (own_y - 2)).attr("jump", "true")

                                    }
                                }
                            }
                            if (data.map_matrix[own_x - 2]) {
                                if (data.map_matrix[own_x - 1][own_y - 2] == 0) {
                                    if (data.map_matrix[own_x - 2][own_y - 2] == 1) {

                                        $("#" + (own_x - 2) + "_" + (own_y - 2)).attr("jump", "true")
                                    }
                                }
                            }

                        }
                    }
                } else {

                    if (data.map_matrix[own_x + 2]) {
                        if (data.map_matrix[own_x + 1][own_y - 2] == 0) {
                            if (data.map_matrix[own_x + 2][own_y - 2] == 1) {
                                $("#" + (own_x + 2) + "_" + (own_y - 2)).attr("jump", "true")

                            }
                        }
                    }
                    if (data.map_matrix[own_x - 2]) {
                        if (data.map_matrix[own_x - 1][own_y - 2] == 0) {
                            if (data.map_matrix[own_x - 2][own_y - 2] == 1) {

                                $("#" + (own_x - 2) + "_" + (own_y - 2)).attr("jump", "true")
                            }
                        }
                    }

                }
            }
        }
    }


    for (let j = 0; j < data.max_players; j++) {
        data.map_matrix[data.coordinates[j][1]][data.coordinates[j][0]] = 1
    }

}

/*



El Juego que he decidido Diseñar es QUORIDOR, el cual se basa en un juego por turnos, de 2. <br>
Consta de una cuadrícula de 9x9. Cada jugador, controla un peón, que debe comenzar en alguno <br>
de los bordes del tablero. Los peones deben ubicarse en el centro de la fila y enfrentados <br>
el uno del otro. Además de controlar un peón, cada jugador va a tener 10 paredes para colocar. <br>
En cada turno puedes o mover el peón  o poner una pared. <br><br>

Los movimientos de los peones no pueden ser diagonales ni de más de una casilla (foto del lado nº1), <br>
ni a través de una pared (foto del lado nº2), a no ser que tengas un peón pegado, que lo podrás <br>
saltar (foto del lado nº5). Si hay un peón pegado y en la misma dirección hay una pared, podrá <br>
saltar de manera diagonal (foto del lado nº3, nº4). Según estas reglas, cuando sea tu turno, se <br>
marcarán en color más claro, las casillas colindantes a tu peón, donde puedas moverte, así como <br>
en la foto del lado. Haciendo click en una de estas casillas, se efectuará el movimiento y el <br>
turno avanzará.<br><br>

Las paredes ocupan 2 casillas de la cuadricula, y hay que ponerla de manera exacta, que solo <br>
ocupen dos casillas (en la foto del lado, la pared A, está bien puesta y la B, está mal).<br>
Para poner una pared, esa no puede atravesar ninguna otra. Haciendo click en dos rendijas, <br>
pegadas, se colocará una pared, si tienes, y el turno avanzará. <br>
Una pared, no se puede quitar ni mover, a no ser que hagas click en el botón de “Undo Wall”. <br>
Eso quitará la última pared puesta. Sirve para las ocasiones que se haya puesto una pared de <br>
manera equívoca que rompa la partida. <br><br>

Para ganar, tu peón tiene que llegar hasta su fila más lejana, donde empezó otro jugador. Siguiendo <br>
la foto del lado, para que el amarillo gane, tendrá que llegar a la fila a donde está el peón verde. <br>
Para que el verde gane tendrá que llegar a la fila donde está el peón amarillo. Para que el peón <br>
rojo gane, tendrá que llegar en la fila donde está el peón azul.<br><br>
<b>ESTÁ TOTALMENTE PROHIBIDO DEJAR ENCERRADO UN PEON O TAPAR AL 100% TU FILA <br>
PARA QUE NADIE LLEGE Y NO PUEDAN GANAR.</b>





El Juego que he decidido Diseñar es QUORIDOR, el cual se basa en un juego por turnos, de 2. 
Consta de una cuadrícula de 9x9. Cada jugador, controla un peón, que debe comenzar en alguno 
de los bordes del tablero. Los peones deben ubicarse en el centro de la fila y enfrentados 
el uno del otro. Además de controlar un peón, cada jugador va a tener 10 paredes para colocar. 
En cada turno puedes o mover el peón  o poner una pared. 

Los movimientos de los peones no pueden ser diagonales ni de más de una casilla (foto del lado nº1), 
ni a través de una pared (foto del lado nº2), a no ser que tengas un peón pegado, que lo podrás 
saltar (foto del lado nº5). Si hay un peón pegado y en la misma dirección hay una pared, podrá 
saltar de manera diagonal (foto del lado nº3, nº4). Según estas reglas, cuando sea tu turno, se 
marcarán en color más claro, las casillas colindantes a tu peón, donde puedas moverte, así como 
en la foto del lado. Haciendo click en una de estas casillas, se efectuará el movimiento y el 
turno avanzará.

Las paredes ocupan 2 casillas de la cuadricula, y hay que ponerla de manera exacta, que solo 
ocupen dos casillas (en la foto del lado, la pared A, está bien puesta y la B, está mal).
Para poner una pared, esa no puede atravesar ninguna otra. Haciendo click en dos rendijas, 
pegadas, se colocará una pared, si tienes, y el turno avanzará. 
Una pared, no se puede quitar ni mover, a no ser que hagas click en el botón de “Undo Wall”. 
Eso quitará la última pared puesta. Sirve para las ocasiones que se haya puesto una pared de 
manera equívoca que rompa la partida. <br>

Para ganar, tu peón tiene que llegar hasta su fila más lejana, donde empezó otro jugador. Siguiendo 
la foto del lado, para que el amarillo gane, tendrá que llegar a la fila a donde está el peón verde. 
Para que el verde gane tendrá que llegar a la fila donde está el peón amarillo. Para que el peón 
rojo gane, tendrá que llegar en la fila donde está el peón azul.
<b>ESTÁ TOTALMENTE PROHIBIDO DEJAR ENCERRADO UN PEON O TAPAR AL 100% TU FILA 
PARA QUE NADIE LLEGE Y NO PUEDAN GANAR.


*/