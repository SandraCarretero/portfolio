$(function(){

    if ($(window).width() >= 768) {
        
        $(window).scroll( function(){
            var scroll = $(window).scrollTop();
            // console.log("scroll"+scroll);
            
            var distancia_elemento = $(".porfolio").offset().top;
            // console.log("distancia elemento"+distancia_elemento);

            var max = $(window).width();

            var move = distancia_elemento - scroll;

            if(scroll >= distancia_elemento && scroll < distancia_elemento + 2*max ){
                console.log("Estoy aquí")
                $(".line").css({
                    "transform": "translateX("+move+"px)"
                });
            }

            else{
                $(".line").css({
                    "transform": "translateX(0px)"
                });
            }
        });
    };



    $("#hamburguer").click( function(){
        $(".pop").toggleClass("aparece");
        $(".fondo").toggleClass("visible")
    })
    
    $("#hamburguer").click( function(){
        $(".linea").toggleClass("cruz")
    })




    $(".title").click( function(){

        $(".text").removeClass("open");
        $(".title").removeClass("active");

        // para buscar un id (o clase o type...)
        var id = $(this).attr("id");
        console.log(id)
        // buscamos la clase con punto y le añadimos la palabra de id (tiene que ser el mismo o algo igual al menos como el final)
        $("."+id).addClass("open");

        var id = $(this).attr("id");
        $(".title_"+id).addClass("active");

    });
});
