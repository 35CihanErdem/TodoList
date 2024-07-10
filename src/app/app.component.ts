import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Model, TodoItems } from './model';
import { Action } from 'rxjs/internal/scheduler/Action';
interface Item {
  description: string;
  action: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
model=new Model();
isDisplay=false;

getitems(){
  
  if (this.isDisplay){
    return this.model.items;
  }
  else{
    return this.model.items.filter(item=> !item.action);
  }
}

additem(value:any){
if (value!=""){
  this.model.items.push( new TodoItems(value,false));
}

}


}



