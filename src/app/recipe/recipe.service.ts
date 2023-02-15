import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
//     new Recipe(
//       "Pioneer Woman Pie",
//       "French silk pie",
//       "https://www.tasteofhome.com/wp-content/uploads/2022/04/Chocolate-Pie-Hero-1-scaled.jpg",
//       [
//         new Ingredient('Chocolate Bark', 6),
//         new Ingredient('Pie Crust', 1)
//       ]
//     ),
//     new Recipe(
//       "Lasagna",
//       "Seven layers of yumminess",
//       "https://assets.bonappetit.com/photos/57adf3c353e63daf11a4dfa2/16:9/w_1280,c_limit/lasagna-bolognese.jpg",
//       [
//         new Ingredient('1 lb hamburger meat', 1),
//         new Ingredient('Lasagna Noodles', 1)
//       ]
//     )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
