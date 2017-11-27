function Foxy(map, x, y){
	Hero.call(this, map, x, y);
}
Foxy.prototype = Object.create(Hero.prototype);
Foxy.prototype.constructor = Foxy;
Foxy.prototype.image = 'characters/foxyfox/foxy.png';
Foxy.prototype.name = 'Foxy Fox';