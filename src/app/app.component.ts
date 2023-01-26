import { Component } from '@angular/core';
import { Tab } from './shared/tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cooking-app';
  currentTab: Tab = Tab.RECIPE;

  onTabClicked(event) {
     this.currentTab = event;
  }

  showRecipe() {
    return this.currentTab === Tab.RECIPE;
  }

  showShopping() {
    return this.currentTab === Tab.SHOPPING;
  }
}
