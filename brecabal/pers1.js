
function Seba(map, x, y) {
	Hero.call(this, map, x, y);
}

Seba.prototype = Object.create(Hero.prototype);
Seba.prototype.constructor = Seba;

// image property MUST be defined in prototype
Seba.prototype.image = 'brecabal/seba1.png';