var Animals = function (name,age,home){
	this.name = name;
	this.age = age;
	this.home = home;
};
Animals.prototype.addHome = function(){
	console.log('Lives at/in the ',this.home);
};
var fox = new Animals("Alex",12,"Forest");
console.log(fox);


