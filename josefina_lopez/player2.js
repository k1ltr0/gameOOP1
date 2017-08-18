'use strict';

function Me(map, x, y) {
  Hero.call(this, map, x, y);
}

Me.prototype = Object.create(Hero.prototype);
Me.prototype.constructor = Me;

// image property MUST be defined in prototype
Me.prototype.image = 'josefina_lopez/yo.jpg';


