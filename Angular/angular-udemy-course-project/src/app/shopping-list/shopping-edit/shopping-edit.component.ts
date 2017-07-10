import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../models/ingredient";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output("addNewIngredient") addNewIngredientEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.addNewIngredientEmitter.emit({name: nameInput.value, amount: Number(amountInput.value)});
  }

}
