'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new ExampleMap1(),
    new ExampleMap2(),
    new ExampleMap3(),
    //new ExampleMapMenu()
  ], [
    miPersonaje,
    KnightHero
  ]);

  game.appendTo(document.body);
  game.run();

});
