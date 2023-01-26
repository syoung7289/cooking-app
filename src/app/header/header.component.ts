import { Component, Output, EventEmitter } from '@angular/core';
import { Tab } from '../shared/tab';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  tabs = Tab;
  @Output() currentTab = new EventEmitter<Tab>();

  tabClicked(event) {
    if (Tab.RECIPE === event.target.innerHTML) {
      this.currentTab.emit(Tab.RECIPE);
    } else {
      this.currentTab.emit(Tab.SHOPPING);
    }
  }
}
