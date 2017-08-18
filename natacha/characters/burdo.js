function Burdo(map,x,y){
	Hero.call(this, map , x ,y);
}

Burdo.prototype = Object.create(Hero.prototype);
Burdo.prototype.constructor = Burdo;

Burdo.prototype.image = 'natacha/characters/character.png';



