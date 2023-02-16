import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailMissingComponent } from './recipe-detail/recipe-detail-missing/recipe-detail-missing.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { AuthGuard } from '../auth/auth.guard';

const recipeRoutes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeDetailMissingComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':recipeId', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':recipeId/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
