function camiHero(map, x, y) {
  Hero.call(this, map, x, y);
}

camiHero.prototype = Object.create(Hero.prototype);
camiHero.prototype.constructor = camiHero;

// image property MUST be defined in prototype
camiHero.prototype.image = 'CamilaSolis/hero.png';

//class camiHero extends Hero{
//	constructor(map, x, y) {
//		super(map,x,y)
//		this.image = 'CamilaSolis/hero.png'
//	}
//}