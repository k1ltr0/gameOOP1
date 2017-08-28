function Ninja(map, x, y) {
  Hero.call(this, map, x, y);
}

Ninja.prototype = Object.create(Hero.prototype);
Ninja.prototype.constructor = Ninja;

Ninja.prototype.image = 'bosqueinvierno/characters/ninja.png';