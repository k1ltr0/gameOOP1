/*class Jo extends Hero{
	constructor(map,x, y,name,image) {
		super(x, y);
		this.name=name
		this.image=image
		this.voice = 'juanito'
	}
}

const j = new Jo(3,5,'jo','jocelynjo/jj.png')
console.log(j)*/

function joHeroe(map, x, y) {
  Hero.call(this, map, x, y);
}

joHeroe.prototype = Object.create(Hero.prototype);
joHeroe.prototype.constructor = joHeroe;

// image property MUST be defined in prototype
joHeroe.prototype.image = 'jocelynjo/jj.png';