import { Component, Output, EventEmitter } from '@angular/core';
import { Tab } from '../shared/tab';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
}
