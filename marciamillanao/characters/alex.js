function Alex(map, x, y) {
  Hero.call(this, map, x, y);
}

Alex.prototype = Object.create(Hero.prototype);
Alex.prototype.constructor = Alex;

// image property MUST be defined in prototype
Alex.prototype.image = 'marciamillanao/characters/alex.png';
