import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { BoolPipe } from '../bool.pipe';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListaTodosComponent},
  {path: 'add', component: AddTodoComponent},
  {path: ':id', component: AddTodoComponent},
]

@NgModule({
  declarations: [
    TodoItemComponent,
    ListaTodosComponent,    
    AddTodoComponent,
    BoolPipe
],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class TodoModule { }
