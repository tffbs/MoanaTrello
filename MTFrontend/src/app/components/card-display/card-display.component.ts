import { Component } from '@angular/core';
import {Card} from "../../shared/models/Card";

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent {
  loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  card: Card = {title: 'Important task', description: this.loremIpsum, status: 0, position: 0, id: '1', asigneeId: '1', ownerId: '1', createdAt: Date(), modifiedAt: Date()}
}
