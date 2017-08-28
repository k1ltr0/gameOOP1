function Knight(map, x, y) {
  Hero.call(this, map, x, y);
}

Knight.prototype = Object.create(Hero.prototype);
Knight.prototype.constructor = Knight;

Knight.prototype.image = 'bosqueinvierno/characters/knight.png';