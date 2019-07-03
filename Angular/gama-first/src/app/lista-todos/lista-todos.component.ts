import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/Todo';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  todos: Todo[] = [];
  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(value=>{
      this.todos = value;
    });
  }

}