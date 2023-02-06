import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input('recipeDetail') recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onAddToShoppingList() {
    console.log(this.recipe.ingredients);
//     this.recipe.ingredients.forEach(ingredient => {
//       this.shoppingListService.addIngredient(ingredient);
//     });
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
