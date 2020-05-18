import { Component, OnInit } from '@angular/core';
import { Todo }from '../../models/todo.model'
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl:'./todos.component.html', 
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todo)=>{
      this.todos = todo;  
      console.log(todo);
    })
  }
  onDelete(todo:Todo){
    this.todos = this.todos.filter(t => t.id != todo.id);
    this.todoService.deleteTodo(todo).subscribe();
    console.log(this.todos);
  }

}
