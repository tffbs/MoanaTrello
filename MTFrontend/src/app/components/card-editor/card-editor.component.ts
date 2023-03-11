import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrls: ['./card-editor.component.scss']
})
export class CardEditorComponent {
  cardEditForm = new FormGroup({

  });
}
