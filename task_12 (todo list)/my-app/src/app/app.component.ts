import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	public list = [];
	public item;
	public index;

	add(value: String){
		this.list.push(value);
		value = " ";
	}

	del(i: number){
		this.list.splice(i, 1);
	}
}
