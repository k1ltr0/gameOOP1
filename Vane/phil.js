function Phil(map, x, y) {
  Hero.call(this, map, x, y);
}

Phil.prototype = Object.create(Hero.prototype);
Phil.prototype.constructor = Phil;

// image property MUST be defined in prototype
Phil.prototype.image = 'Vane/rick.gif';