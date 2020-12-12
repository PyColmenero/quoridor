
table_map = $("#table_map")
generatetable = $("#generate_table")

function generate_table(){

    var html_map = ""
    var vertical_wall = ""
    var y_coor = 0;

    for(let x = 0; x < (map_size[0]*2+1); x++){
     
        y_coor = 0;
       
        if(x%2 == 0){
            html_map += "<div class='cube'>"
            for(let y = 0; y < (map_size[1]*2+1); y++){

                if(y%2 == 0){
                    html_map +=  "<div data-x='"+x+"' data-y='"+y_coor+"' class='sblock tinny_block'></div> "
                } else {
                    html_map +=  "<div data-x='"+x+"' data-y='"+y_coor+"' class='sblock innerblock v_block'></div> "                    
                }
                y_coor++
            }
            html_map +=  "</div>"
        } else {
            html_map += "<div class='cube'>"
            for(let y = 0; y < (map_size[1]*2+1); y++){

                if(y%2 != 0){
                    html_map +=  "<div data-x='"+x+"' data-y='"+y_coor+"' class='big_block'></div> "
                } else {
                    html_map +=  "<div data-x='"+x+"' data-y='"+y_coor+"' class='sblock innerblock h_block'></div> "
                }
                y_coor++
            }
            html_map +=  "</div>"

       }
    }

    generatetable.html(html_map)
}