'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new ExampleMap1(),
    new ExampleMap2()
  ], [
    NewHero
    //Hero
  ]);

  game.appendTo(document.body);
  game.run();

});
