function Rod(map, x, y) {
	Hero.call(this, map, x, y);
}

Rod.prototype = Object.create(Hero.prototype);
Rod.prototype.constructor = Rod;

// image property MUST be defined in prototype
Rod.prototype.image = 'alexandraNeira/characters/rod.png';