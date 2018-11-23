
  class Animal {
	private name: string;
	private age: number;
	private home: string;
	constructor( AnimalName: string, AnimalAge: number, AnimalHome: string){
		this.name = AnimalName;
		this.age = AnimalAge;
		this.home = AnimalHome;
	}
	private place(): void{
		console.log(this.name,'lives at/in the',this.home,'.Age is',this.age);
	}	
}

class Fox extends Animal {
	private type: string;
	private fullInfo(): void{
		console.log (this.type + 'with name' + this.name + 'and age' + this.age + 'lives at the' + this.place);
	}
}