function MeHero(map, x, y, image) {
  Hero.call(this, map, x, y, image);
}

MeHero.prototype = Object.create(Hero.prototype);
MeHero.prototype.constructor = MeHero;

// image property MUST be defined in prototype
MeHero.prototype.image = 'characters/me/me.png';

// name property MUST be defined in prototype
MeHero.prototype.name = 'AkiraHero';
