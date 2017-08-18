'use strict';

function Belen(map, x, y) {
	Hero.call(this, map, x, y);
}

Belen.prototype = Object.create(Hero.prototype);
Belen.prototype.constructor = Belen;

// image property MUST be defined in prototype
Belen.prototype.image = 'brecabal/belen.png';
