import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/Todo';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(public todoService: TodoService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.todoService.getTodos(user.id).subscribe( todos => {
        this.todos = todos;
      });
    })    

    //this.todoService.getTodos().subscribe(value=>{
      //this.todos = value;
    //});
  }

  onDeleteItem(id) {
    console.log(id);
    this.todoService.deleteTodo(id).subscribe(value => {
      alert('Registro deletado');
      this.todos = this.todos.filter(todo => {
        return todo.id != id;
      })
    });
  }

}
