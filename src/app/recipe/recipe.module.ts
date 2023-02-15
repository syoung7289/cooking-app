import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailMissingComponent } from './recipe-detail/recipe-detail-missing/recipe-detail-missing.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module'
import { DropdownDirective } from '../shared/dropdown.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    RecipeDetailMissingComponent,
    RecipeEditComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RecipeRoutingModule,
    SharedModule
  ]
})
export class RecipeModule {}
