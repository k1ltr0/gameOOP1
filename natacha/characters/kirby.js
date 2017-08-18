function Kirby(map, x, y) {
  Hero.call(this, map, x, y);
}

Kirby.prototype = Object.create(Hero.prototype);
Kirby.prototype.constructor = Kirby;

// image property MUST be defined in prototype
Kirby.prototype.image = 'natacha/characters/kirby.png';
