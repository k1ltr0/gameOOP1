'use strict';


function Bici(map, x, y) {
  Hero.call(this, map, x, y);
}

Bici.prototype = Object.create(Hero.prototype);
Bici.prototype.constructor = Bici;

// image property MUST be defined in prototype
Bici.prototype.image = 'josefina_lopez/bici.png';


