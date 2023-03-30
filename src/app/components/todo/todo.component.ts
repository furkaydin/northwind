import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/models/todo';

import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(private todoServices:TodoService){}
  todos:todo[] = [];
  disabled = true;
  ngOnInit(): void {
    this.getTodos()
  }

  getTodos()
  {
    this.todoServices.getTodos().subscribe(response=>{
      this.todos = response;
      this.disabled = false;
    })
  }
}
