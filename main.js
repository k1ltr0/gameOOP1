'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new ExampleMap1(),
    new ExampleMap2(),
    new ExampleMap3(),
    new ExampleMap4()
  ], [
    PrincessHero,
  	DragonHero,
    KnightHero
  ]);

  game.appendTo(document.body);
  game.run();

});
