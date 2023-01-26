import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe }  from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "Pioneer Woman Pie",
      "French silk pie",
      "https://www.tasteofhome.com/wp-content/uploads/2022/04/Chocolate-Pie-Hero-1-scaled.jpg"
    ),
    new Recipe(
      "Lasagna",
      "Seven layers of yumminess",
      "https://assets.bonappetit.com/photos/57adf3c353e63daf11a4dfa2/16:9/w_1280,c_limit/lasagna-bolognese.jpg"
    )
  ];

  pushDetailsForIndex(recipe: Recipe) {
    console.log("list: " + recipe);
    this.selectedRecipe.emit(recipe);
  }
}
