function PrincessHero(map, x, y) {
  Hero.call(this, map, x, y);
}

PrincessHero.prototype = Object.create(Hero.prototype);
PrincessHero.prototype.constructor = PrincessHero;

// image property MUST be defined in prototype
PrincessHero.prototype.image = 'characters/princess/princess.png';
