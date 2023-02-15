import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (listIndex: number) => {
        this.editMode = true;
        this.editedItemIndex = listIndex;
        this.editedItem = this.shoppingListService.getIngredient(listIndex);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAdd() {
    const ingredient =
      new Ingredient(this.shoppingListForm.value.name, this.shoppingListForm.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.resetForm();
  }

  onClear() {
    this.resetForm();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.resetForm();
  }

  resetForm() {
    this.editedItemIndex = null;
    this.editedItem = null;
    this.editMode = false;
    this.shoppingListForm.reset();
  }
}
