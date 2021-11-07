$(document).ready(function () {

  /*MODAL*/
  $('.imagen4').click(function () {
    $('.modal-imagen4').attr('src', 'assets/img/modal4.png');
    $('#mimodal4').modal();
  });

  $('.imagen3').click(function () {
    $('.modal-imagen3').attr('src', 'assets/img/modal3.png');
    $('#mimodal3').modal();
  });

  $('.imagen2').click(function () {
    $('.modal-imagen2').attr('src', 'assets/img/modal2.png');
    $('#mimodal2').modal();
  });

  $('.imagen1').click(function () {
    $('.modal-imagen1').attr('src', 'assets/img/modal1.png');
    $('#mimodal1').modal();
  });

  /*TOOLTIP*/
  $('[data-toggle="tooltip"]').tooltip();

  $(".card-title").dblclick(function () {
    $(".card-text").toggle("slow");
  });

  /* ALERT*/
  $('#info').click(function(){
    alert("Horario de atención : Lunes a Domingo 12:30 - 00:00 hrs.")
});
});