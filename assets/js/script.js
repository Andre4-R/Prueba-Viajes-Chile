$(function () {

    //Alerta con un click al enviar mensaje
    $("#enviarFormulario").click(function (){
      alert("El mensaje fue enviado correctamente.")
    })
  
    //Cambiar color navbar al hacer scroll
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    //Desaparecer aparecer texto al presionar imagenes de cards  
    $(".card-img-top").click(function(){
      $(".text-hidden").toggle()
    });
  
  
})
