function Richie(map, x, y) {
	Hero.call(this, map, x, y);
}

Richie.prototype = Object.create(Hero.prototype);
Richie.prototype.constructor = Richie;

// image property MUST be defined in prototype
Richie.prototype.image = 'alexandraNeira/characters/richie.png';