'use strict';


function ExampleMap2() {

  Map.call(this, {
    cols: 12,
    rows: 12,
    tsize: 64,
    layers: [[
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
      1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1,
      1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1,
      1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1,
      1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1,
      1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1,
      1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1,
      1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1,
      1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1,
      1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ], [
      3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3,
      3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
      3, 0, 4, 5, 0, 0, 0, 0, 5, 4, 0, 3,
      0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0,
      0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0,
      0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0,
      0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 4, 5, 5, 5, 5, 5, 5, 4, 0, 0,
      7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6
    ]]
  });
}


// Inherit from `Map`
ExampleMap2.prototype = Object.create(Map.prototype);
ExampleMap2.prototype.constructor = ExampleMap2;


window.ExampleMap2 = ExampleMap2;
