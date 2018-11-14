var Animal = function (name,age,home){
	this.name = name;
	this.age = age;
	this.home = home;
};
Animal.prototype.addHome = function(){
	console.log('Lives at/in the ',this.home);
};
var fox = new Animal("Alex",12,"Forest");
console.log(fox);

var Fish = function(){
	Animal.apply(this, arguments)
};

var Jellyfish = new Fish("Sam",13,"Ocean");
console.log(Jellyfish);

