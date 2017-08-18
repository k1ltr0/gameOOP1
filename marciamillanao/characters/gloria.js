function Gloria(map, x, y) {
  Hero.call(this, map, x, y);
}

Gloria.prototype = Object.create(Hero.prototype);
Gloria.prototype.constructor = Gloria;

// image property MUST be defined in prototype
Gloria.prototype.image = 'marciamillanao/characters/gloria.png';