import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem:Todo;
  constructor() { }

  ngOnInit() {

  }
  //Set Dynamics Classes
  setClasses(){
    let classes={
      todoCSS:true,
      'is-completed': this.todoItem.complete
    }
    return classes;
  }
  onToggle(todo:Todo){
    todo.complete=!todo.complete;
  }
  onDelete(todo:Todo){
    console.log('delete');
  }

}
