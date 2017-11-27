'use strict';


function Map4() {

  Map.call(this, {
    cols: 12,
    rows: 12,
    tsize: 64,
    layers: [[
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 3,
      3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 2
    ], [
      4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 4, 0, 5, 5, 5, 5, 0, 0, 0, 4,
      4, 0, 4, 0, 5, 5, 5, 5, 0, 0, 0, 4,
      4, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 6
    ]]
  });
}


Map4.prototype = Object.create(Map.prototype);


Map4.prototype.constructor = Map4;


window.Map4 = Map4;