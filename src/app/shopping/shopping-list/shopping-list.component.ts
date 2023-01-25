import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Chocolate bark', 6),
    new Ingredient('Pie Crust', 1),
    new Ingredient('Tomato Paste', 1)
  ];
}
