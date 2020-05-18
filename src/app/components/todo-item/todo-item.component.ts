import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem:Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();
  constructor(private todoServ:TodoService) { }

  ngOnInit() {

  }
  //Set Dynamics Classes
  setClasses(){
    let classes={
      todoCSS:true,
      'is-completed': this.todoItem.completed
    }
    return classes;
  }
  onToggle(todo:Todo){
    todo.completed=!todo.completed;
    this.todoServ.toggleCompleted(todo).subscribe(todo=>console.log(todo));
  }
  onDelete(todo:Todo){
    console.log('delete');
    this.deleteTodo.emit(todo);
  }

}
