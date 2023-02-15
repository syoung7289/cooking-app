import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-edit/shopping-list-edit.component';
import { SharedModule } from '../../shared/shared.module';

const shoppingRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    RouterModule.forChild(shoppingRoutes),
    FormsModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class ShoppingListModule {}
