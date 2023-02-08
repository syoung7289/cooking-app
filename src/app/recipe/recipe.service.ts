import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      "Pioneer Woman Pie",
      "French silk pie",
      "https://www.tasteofhome.com/wp-content/uploads/2022/04/Chocolate-Pie-Hero-1-scaled.jpg",
      [
        new Ingredient('Chocolate Bark', 6),
        new Ingredient('Pie Crust', 1)
      ]
    ),
    new Recipe(
      "Lasagna",
      "Seven layers of yumminess",
      "https://assets.bonappetit.com/photos/57adf3c353e63daf11a4dfa2/16:9/w_1280,c_limit/lasagna-bolognese.jpg",
      [
        new Ingredient('1 lb hamburger meat', 1),
        new Ingredient('Lasagna Noodles', 1)
      ]
    )
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
}
