$(document).ready(function(){
  $("option").click(function(){
    var valor = $('#valor').val();
    if (valor == 0) {
      css = "ef0";
          $('h2').attr('class', css);
    }
    if (valor == 1) {
      css = "ef1";
      $('h2').attr('class', css);
    }
    if (valor == 2) {
      css = "ef2";
      $('h2').attr('class', css);
    }

  });
});
