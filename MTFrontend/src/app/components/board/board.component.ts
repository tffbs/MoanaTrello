import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  pendingTasks = [{ name: 'Task 1' }, { name: 'Task 2' }, { name: 'Task 3' }];
  inProgressTasks = [{ name: 'Task 4' }, { name: 'Task 5' }, { name: 'Task 6' }];
  blockedTasks = [{ name: 'Task 7' }, { name: 'Task 8' }, { name: 'Task 9' }];
  doneTasks = [{ name: 'Task 10' }, { name: 'Task 11' }, { name: 'Task 12' }];

  onDrop(event: CdkDragDrop<any>) {
    console.log(event);
    console.log(event.container);
    console.log(event.previousContainer);
    if (event.container._dropListRef === event.previousContainer._dropListRef) {
      // move within the same column
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // move to a different column
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
