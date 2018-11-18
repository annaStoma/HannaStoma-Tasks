function Animal(name,age,home){
	this.name = name;
	this.age = age;
	this.home = home;
};
Animal.prototype.addHome = function(){
	console.log( this.name + 'Lives at/in the ' + this.home);
};

function Fox(name,age,home){
	this.name = name;
	this.age = age;
	this.home = home;
};

Fox.prototype = Object.create(Animal.prototype);
Fox.prototype.constructor = Fox;

Fox.prototype.color = function() {
	console.log( this.name + ' age is ' + this.age);
}
