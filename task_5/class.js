
class Animal {
	constructor(name,age,home) {
		this.name = name;
		this.age = age;
		this.home = home;
	}
	place() {
		console.log(this.name,'lives at/in the',this.home,'.Age is',this.age);
	}
}
class Fox extends Animal {
	place() {
		super.place();
		console.log(this.home,'is habitat.');
	}
}
new Fox("Fox", 2,"forest").place();

