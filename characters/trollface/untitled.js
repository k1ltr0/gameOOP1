function TrollFace(map, x, y){
	Hero.call(this, map, x, y);
}
TrollFace.prototype = Object.create(Hero.prototype);
TrollFace.prototype.constructor = TrollFace;
TrollFace.prototype.image = 'characters/trollface/trollface.png';
TrollFace.prototype.name = 'troll';