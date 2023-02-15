import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe }  from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
