function Rick(map, x, y) {
  Hero.call(this, map, x, y);
}

Rick.prototype = Object.create(Hero.prototype);
Rick.prototype.constructor = Rick;

// image property MUST be defined in prototype
Rick.prototype.image = 'Vane/rick.gif';
