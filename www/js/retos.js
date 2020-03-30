function detalleReto(reto){
    $.ajax({
        type: "POST",
        url: "http://192.168.1.76/ArchivosServidor/mostrarDetalleRetos.php",
        cache: false,
        data: "nombre="+usuario+"&reto="+reto,
        beforeSend: function() {
            $("#detalleReto").text("Cargando...");
          },
        success: function(response)
        {
            $('#detalleReto').html(response).fadeIn();
            $("#detalleReto").listview("refresh");
           
        }
    }); 
}