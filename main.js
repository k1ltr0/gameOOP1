'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new Map3(),
    new ExampleMap1(),
    new ExampleMap2(),
    new Map4()
  ], [
  	TrollFace,
    Foxy,
    KnightHero
    //Hero
  ]);

  game.appendTo(document.body);
  game.run();

});
