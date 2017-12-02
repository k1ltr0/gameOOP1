function KnightHero(map, x, y, image) {
  Hero.call(this, map, x, y, image);
}

KnightHero.prototype = Object.create(Hero.prototype);
KnightHero.prototype.constructor = KnightHero;

// image property MUST be defined in prototype
KnightHero.prototype.image = 'characters/knight/knight.png';

// name property MUST be defined in prototype
KnightHero.prototype.name = 'KnightHero';