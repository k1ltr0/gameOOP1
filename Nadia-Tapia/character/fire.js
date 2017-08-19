function Fire(map, x, y) {
  Hero.call(this, map, x, y);
}

Fire.prototype = Object.create(Hero.prototype);
Fire.prototype.constructor = Fire;
// image property MUST be defined in prototype
Fire.prototype.image = 'Nadia-Tapia/character/fire.png'
