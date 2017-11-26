'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new ExampleMap1(),
    new ExampleMap2(),
    /*Nuevo mapa*/
    new ExampleMap3()
  ], [
    NewHero
    //Hero
  ]);

  game.appendTo(document.body);
  game.run();

});
