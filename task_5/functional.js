var Animal = function(name, age){
	this.name = name;
	this.age = age;

	this.Text = function(){
		console.log(this.name,' is', this.age,'age old.');
	}
};
var Fish = function(name, age){
	Animal.apply(this, arguments);
}

var Fox = new Animals("Fox", 3);
var Jellyfish = new Fish("Jellyfish", 2);