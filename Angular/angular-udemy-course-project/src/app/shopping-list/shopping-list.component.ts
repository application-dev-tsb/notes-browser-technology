import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Pepper', 12),
    new Ingredient('Salt', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
