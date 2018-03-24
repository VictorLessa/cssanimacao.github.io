  $(document).ready(function(){
    $('.botao').click(function(){
      var valor = $('#valor').val();
      var css;
      if (valor == "null") {
        alert('Escolha uma animação');
      }
      if (valor == 0) {
        css = "descendo";
            $('h2').attr('class', css);
            return;
      }else{
        $('h2').removeClass(css);
      }
      if (valor == 1) {
        css = "subindo";
        $('h2').attr('class', css);
        return;
      }else{
        $('h2').removeClass(css);
      }
      if (valor == 2) {
        css = "girando";
        $('h2').attr('class', css);
        return;
      }else{
        $('h2').removeClass(css);
      }

    });

  });
s
