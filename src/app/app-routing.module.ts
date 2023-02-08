import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeDetailMissingComponent } from './recipe/recipe-detail/recipe-detail-missing/recipe-detail-missing.component'
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeComponent, children: [
    { path: '', component: RecipeDetailMissingComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':recipeId', component: RecipeDetailComponent },
    { path: ':recipeId/edit', component: RecipeEditComponent },
  ]},
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
