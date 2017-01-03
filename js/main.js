$(document).ready(function ()
{
  var banner =
  {
    padre: $("#banner"),
    numeroSlides: $("#banner").children(".slide").length,
    posicion: 1
  }

  var info =
  {
    padre: $("#info"),
    numeroSlides: $("#info").children(".slide").length,
    posicion: 1
  }

  banner.padre.children(".slide").first().css
  ({
    "left": 0
  });
  info.padre.children(".slide").first().css
  ({
    "left": 0
  });
  var altoBanner = function()
  {
    var alto = banner.padre.children(".slide").outerHeight();
    banner.padre.css
    ({
      "height": alto + "px"
    });
  }

  var altoInfo = function()
  {
    var alto = info.padre.children(".activo").outerHeight();
    info.padre.animate
    ({
      "height": alto + "px"
    });
  }

  var altoContenedor = function()
  {
    var altoVentana = $(window).height();
    if (altoVentana <= $("#contenedor").outerHeight() + 200)
    {
      $("#contenedor").css(
        {
          "height": ""
        });
    }
    else
      {
        $("#contenedor").css(
          {
            "height": altoVentana + "px"
          });
      }
  }

  altoBanner();
  altoInfo();
  altoContenedor();
  $(window).resize(function()
  {
    altoBanner();
    altoInfo();
    altoContenedor();
  });

$("#info").children(".slide").each(function()
{
  $("#botones").append("<span>");
});
$("#botones").children("span").first().addClass("activo");

//Banner
  //Boton siguiente
  $("#banner-boton-despues").on("click", function(e)
  {
    e.preventDefault();
    if(banner.posicion < banner.numeroSlides)
    {
      //Nos aseguramos de que los demas slides empiecen desde la derecha.
      banner.padre.children().not(".activo").css(
        {
          "left": "100%"
        }
      );
      //Quitamos la clave activo y se la ponemos al siguiente elemento. Y lo animamos.
      $("#banner .activo").removeClass("activo").next().addClass("activo").animate(
        {
          "left": "0"
        });
      //Animamos el slide anterior para que se desplace hacia la izquierda.
      $("#banner .activo").prev().animate(
        {
          "left": "-100%"
        }
      );

        banner.posicion = banner.posicion + 1;
    }
    else
      {
        //Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha.
        $("#banner .activo").animate(
          {
            "left": "-100%"
          });
        //Seleccionamos todos los slides que no tengan la clase .activo y los posicionamos a la derecha.
        banner.padre.children().not(".activo").css(
          {
            "left": "100%"
          }
        );
        //Eliminamos la clase activo y se la ponemos al primer elemento, despues lo animamos.
        $("#banner .activo").removeClass("activo");
        banner.padre.children(".slide").first().addClass("activo").animate(
          {
            "left": 0
          });
        //Reseteamos la posicion a 1
        banner.posicion = 1;
      }
  });
  //Boton anterior
  $("#banner-boton-antes").on("click", function(e)
{
  e.preventDefault();
  if (banner.posicion > 1)
  {
  banner.padre.children().not(".activo").css(
    {
      "left": "-100%"
    });
    $("#banner .activo").animate(
      {
        "left": "100%"
      });
    $("#banner .activo").removeClass("activo").prev().addClass("activo").animate(
      {
        "left": 0
      });
      banner.posicion = banner.posicion - 1;
    }
    else
    {
      banner.padre.children().not(".activo").css(
        {
          "left": "-100%"
        });
      $("#banner .activo").animate(
        {
          "left": "100%"
        });
      $("#banner .activo").removeClass("activo");
      banner.padre.children().last().addClass("activo").animate(
        {
          "left": 0
        });
        banner.posicion = banner.numeroSlides;
    }
});

//Info
  //Boton siguiente
  $("#info-boton-despues").on("click", function(e)
  {
    e.preventDefault();
    if(info.posicion < info.numeroSlides)
    {
      //Nos aseguramos de que los demas slides empiecen desde la derecha.
      info.padre.children().not(".activo").css(
        {
          "left": "100%"
        }
      );
      //Quitamos la clave activo y se la ponemos al siguiente elemento. Y lo animamos.
      $("#info .activo").removeClass("activo").next().addClass("activo").animate(
        {
          "left": "0"
        });
      //Animamos el slide anterior para que se desplace hacia la izquierda.
      $("#info .activo").prev().animate(
        {
          "left": "-100%"
        }
      );
      $("#botones").children(".activo").removeClass("activo").next().addClass("activo");
      info.posicion = info.posicion + 1;
    }
    else
      {
        //Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha.
        $("#info .activo").animate(
          {
            "left": "-100%"
          });
        //Seleccionamos todos los slides que no tengan la clase .activo y los posicionamos a la derecha.
        info.padre.children().not(".activo").css(
          {
            "left": "100%"
          }
        );
        //Eliminamos la clase activo y se la ponemos al primer elemento, despues lo animamos.
        $("#info .activo").removeClass("activo");
        info.padre.children(".slide").first().addClass("activo").animate(
          {
            "left": 0
          });
        $("#botones").children(".activo").removeClass("activo");
        $("#botones").children("span").first().addClass("activo");
        //Reseteamos la posicion a 1
        info.posicion = 1;
      }
      altoInfo();
  });
  //Boton anterior
  $("#info-boton-antes").on("click", function(e)
{
  e.preventDefault();
  if (info.posicion > 1)
  {
  info.padre.children().not(".activo").css(
    {
      "left": "-100%"
    });
    $("#info .activo").animate(
      {
        "left": "100%"
      });
    $("#info .activo").removeClass("activo").prev().addClass("activo").animate(
      {
        "left": 0
      });
      $("#botones").children(".activo").removeClass("activo").prev().addClass("activo");
      info.posicion = info.posicion - 1;
    }
    else
    {
      info.padre.children().not(".activo").css(
        {
          "left": "-100%"
        });
      $("#info .activo").animate(
        {
          "left": "100%"
        });
      $("#info .activo").removeClass("activo");
      info.padre.children().last().addClass("activo").animate(
        {
          "left": 0
        });
        $("#botones").children(".activo").removeClass("activo");
        $("#botones").children("span").last().addClass("activo");
        info.posicion = info.numeroSlides;
    }
    altoInfo();
});

});
