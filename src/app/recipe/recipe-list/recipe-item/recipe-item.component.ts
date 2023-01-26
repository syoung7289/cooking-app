import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('recipeItem') recipe: Recipe;
  @Input() recipeId: number;
  @Output() recipeSelected = new EventEmitter<void>();

  onRecipeItemSelected() {
    this.recipeSelected.emit();
  }
}
