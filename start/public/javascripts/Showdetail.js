$(document).ready(function() {

      function fn(str){
          var res;
          res = str.replace(/[^0-9]/g,"");
          return res;
      }

      var viewCounter = 0;
      var viewMax = $('ul').find("li").length - 1;

      $('.edit').click(function(){

      });

      $('.moveRight').click(function(){

        if(viewCounter != viewMax){
          viewCounter++;
          $('ul').css("margin-left", (-1 * viewCounter * 100) + '%' );
        }

      });


      $('.moveLeft').click(function(){

        if(viewCounter != 0){
          viewCounter--;
          $('ul').css("margin-left", (-1 * viewCounter * 100) + '%' );
        }

      });
})
