var counter = 0;
var index = 0;




 function addButton(counter){
    var appendinput = '<tr id="row'+index+'"><td><input type="text" class="form-control"></td><td><button class="btn btn-danger btn_remove" id="'+index+'">X</button></td></tr>';

    $('#table' +counter+' tbody').append(appendinput);
    
    index++;
}

$(document).on('click', '.btn_remove', function(){  
    var button_id = $(this).attr("id");   
    $('#row'+button_id+'').remove();  
});




$(document).on('change','#selectoption',function(){

    
    
    var name = $(this).find('option:selected').text();

    var homemenu = '<a id="link'+counter+'" class="nav-item nav-link" data-toggle="tab" href="#ctable'+counter+'" role="tab" aria-controls="nav-profile" aria-selected="false"><button id="'+counter+'" class="removelink">X</button>'+name+'</a>';

    var table = ' <div class="tab-pane fade show " id="ctable'+counter+'" role="tabpanel" aria-labelledby="1"><table id="table'+counter+'"><thead><tr><td>'+name+'</td><td>Action</td></tr></thead><tbody>  </tbody><tfoot><tr><td> </td><td></td></tr></tfoot></table></div>';

    var content = '<tr><td><input type="text" class="form-control"></td><td><button class="btn btn-success" id="tambah" OnClick="addButton('+counter+');">+</button></td></tr>';

    $('#myTab').append(homemenu);

    $('#content').append(table);

    $('#table'+counter+' tbody').append(content);

    $(document).on('click', '.removelink', function(){  
        var btnid = $(this).attr("id");   
        $('#link'+btnid+'').remove();
        $('#ctable'+btnid+'').remove();

    });
    

    
    
counter++;

});








