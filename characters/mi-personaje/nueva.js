function miPersonaje(map, x, y) {
  Hero.call(this, map, x, y);
}

miPersonaje.prototype = Object.create(Hero.prototype);
miPersonaje.prototype.constructor = miPersonaje;

// image property MUST be defined in prototype
miPersonaje.prototype.image = 'characters/knight/Link.png';
