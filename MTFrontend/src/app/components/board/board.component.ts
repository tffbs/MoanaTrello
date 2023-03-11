import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {CardListItem} from "../../shared/models/CardListItem";
import {MatDialog} from "@angular/material/dialog";
import {CardDisplayComponent} from "../card-display/card-display.component";
import {Card} from "../../shared/models/Card";
import {CardEditorComponent} from "../card-editor/card-editor.component";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  pendingTasks: CardListItem[] = [
    {id: '1', title: 'Title1', description: 'Description1', status: 0, position: 0},
    {id: '2', title: 'Title2', description: 'Destion1', status: 0, position: 1},
    {id: '3', title: 'Title3', description: 'Descriptn1', status: 0, position: 2}
  ];
  inProgressTasks: CardListItem[] = [
    {id: '4', title: 'Title4', description: 'scription1', status: 1, position: 0},
    {id: '5', title: 'Title5', description: 'Description1', status: 1, position: 1},
    {id: '6', title: 'Title6', description: 'Desption1', status: 1, position: 2}
  ];
  blockedTasks: CardListItem[] = [
    {id: '7', title: 'Title7', description: 'Descripon1', status: 2, position: 0},
    {id: '8', title: 'Title8', description: 'Descriion1', status: 2, position: 1},
    {id: '9', title: 'Title9', description: 'Deription1', status: 2, position: 2}
  ];
  doneTasks: CardListItem[] = [
    {id: '1', title: 'Title1', description: 'Description1', status: 3, position: 0},
    {id: '1', title: 'Title1', description: 'Description1', status: 3, position: 1},
    {id: '1', title: 'Title1', description: 'Description1', status: 3, position: 2}
  ];

  constructor(private readonly dialog: MatDialog) {
  }

  onDrop(event: CdkDragDrop<any>) {
    console.log(event);
    if (event.container._dropListRef === event.previousContainer._dropListRef) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      event.container.data.forEach((card: any, position: any) => {
        this.updatePosition(card, position);
      });
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // this does not work if the columns are in a different order...
      this.updateStatus(event.item.data, +event.container.id.slice(-1));
    }
  }

  updatePosition(card: CardListItem, position: number): void {
    console.log(card);
    console.log(position);
  }

  updateStatus(card: CardListItem, status: number): void{
    console.log(card);
    console.log(status);
  }

  open(card: CardListItem): void{
    const dialogRef = this.dialog.open(CardDisplayComponent);
  }

  edit(card: CardListItem): void{
    console.log('clickedEdit');
    const dialogRef = this.dialog.open(CardEditorComponent);
  }
}
