
let url="dados.xml";
var id = 0;

$.ajax(url)
    .done(function(xml){
        $(xml).find("pirata").each(function(){
            $("#cards").append('<div class="card"><a href="individual.html?id='+$(this).find("id").text()+'">  <img class="foto"src="'+ $(this).find("id").text() +'.png"> <p class="nome">'+ $(this).find("nome").text() +'</p> <p>'+ $(this).find("alcunha").text()+'<\p> <p class="rec"> <img class="berrys" src="berrys.png">'+ $(this).find("recompensa").text()+' </p><p> Status:'+ $(this).find("status").text()+'</a> </p><\div>');
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    })

   


    var url_string = window.location.href;
    var url1 = new URL(url_string);
    var id = parseInt(url1.searchParams.get("id"));

    $.ajax(url)
    .done(function(xml){
            $(xml).find("pirata").each(function(){
                var pos = parseInt($(this).find("id").text())
                if(id == pos){
                $("#individual").append('<div class="card"> <img class="foto"src="'+ $(this).find("id").text() +'.png"><p class="nome">'+ $(this).find("nome").text() +'</p> <p>'+ $(this).find("alcunha").text()+'<\p> <p class="rec"> <img class="berrys" src="berrys.png">'+ $(this).find("recompensa").text()+' </p><p> Status:'+ $(this).find("status").text()+' </p><\div>');
                }
            });
        
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    })
