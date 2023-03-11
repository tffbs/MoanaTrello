import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {BoardComponent} from "./components/board/board.component";
import {AuthGuard} from "./authentication/auth.guard";
import {CardEditorComponent} from "./components/card-editor/card-editor.component";
import {CardDisplayComponent} from "./components/card-display/card-display.component";

const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'board', component: BoardComponent },
  { path: 'card', component: CardEditorComponent },
  { path: 'showcard', component: CardDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
