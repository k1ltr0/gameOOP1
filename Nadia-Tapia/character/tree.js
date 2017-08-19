function Tree(map, x, y) {
  Hero.call(this, map, x, y);
}

Tree.prototype = Object.create(Hero.prototype);
Tree.prototype.constructor = Tree;

// image property MUST be defined in prototype
Tree.prototype.image = 'Nadia-Tapia/character/tree.png';