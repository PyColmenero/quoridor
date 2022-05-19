var start_coordinates = [0,0]
var map_trap_matrix;

function detect_trap(){

    start_coordinates = data.coordinates[data.index]
    start_coordinates[0] -= 1
    start_coordinates[0] /= 2
    start_coordinates[1] -= 1
    start_coordinates[1] /= 2

    // create map trap matrix
    for( var x = 0; x < 9; x++){
        map_trap_matrix[x] = [0,0,0,0,0,0,0,0,0];  
    }

    map_trap_matrix[start_coordinates[0]][start_coordinates[1]] = 1




    /**
     *  1 , 5
     *  0 , 2
     * 
     *  3 , 7
     *  (x - 1) / 2
     *  1
     *  3
     * 
     */



}