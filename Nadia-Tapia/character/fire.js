function fire(map, x, y) {
  Hero.call(this, map, x, y);
}

fire.prototype = Object.create(Hero.prototype);
fire.prototype.constructor = fire;
// image property MUST be defined in prototype
fire.prototype.image = 'Nadia-Tapia/character/fire.png'
