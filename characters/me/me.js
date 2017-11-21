function MeHero(map, x, y) {
  Hero.call(this, map, x, y);
}

MeHero.prototype = Object.create(Hero.prototype);
MeHero.prototype.constructor = MeHero;

// image property MUST be defined in prototype
MeHero.prototype.image = 'characters/me/me.png';