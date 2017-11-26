function NewHero(map, x, y) {
  Hero.call(this, map, x, y);
}

NewHero.prototype = Object.create(Hero.prototype);
NewHero.prototype.constructor = NewHero;

// image property MUST be defined in prototype
NewHero.prototype.image = 'characters/new/new.png';
