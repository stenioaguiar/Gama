import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/Todo';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  email ='';
  todo: Todo = {
    id: null,
    title: '',
    description: '',
    finished: false,
    date: '',
    userId: ''
  }

  isEdit = false;

  constructor(private todoService: TodoService, private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params.id) {
        this.isEdit = true;

        this.todoService.getTodo(params.id).subscribe((todo: any) => {
          this.todo = todo;
        })
      }
    })

    this.authService.currentUser.subscribe(user => {
      this.todo.userId = user.id;
    })
  }

  enviar() {
    if (this.isEdit)
    {
      this.todoService.updateTodo(this.todo.id,this.todo).subscribe(value => {
        alert('Todo editado com sucesso');
        this.router.navigateByUrl('/todos');
      })
    }
    else {
      this.todoService.adicionarTodo(this.todo).subscribe(value => {
        alert('Todo adiconado com sucesso');
        this.router.navigateByUrl('/todos');
      });
      console.log(this.todo);
    }
    
  }

}
