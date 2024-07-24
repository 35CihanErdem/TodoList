import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Model, TodoItems } from './model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  constructor() {
    // Yerel depolamadan verileri yükle
    const savedItems = localStorage.getItem('todoItems');
    if (savedItems) {
      this.model.items = JSON.parse(savedItems);
    }
  }

  getitems() {
    if (this.isDisplay) {
      return this.model.items;
    } else {
      return this.model.items.filter(item => !item.action);
    }
  }

  additem(value: any) {
    if (value != "") {
      this.model.items.push(new TodoItems(value, false));
      // Yerel depolamaya kaydet
      this.saveItems();
    }
  }

  // Yerel depolamaya kaydetme fonksiyonu
  saveItems() {
    localStorage.setItem('todoItems', JSON.stringify(this.model.items));
  }
}
