import { Component, OnInit } from '@angular/core';
import { Todo }from '../../models/todo.model'

@Component({
  selector: 'app-todos',
  templateUrl:'./todos.component.html', 
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() { }

  ngOnInit() {
    this.todos =[
      {
        id:1,
        title:"todo1",
        complete:false
      },
      {
        id:2,
        title:"todo 2 extra",
        complete:false
      },
      {
        id:2,
        title:'todo 3 simple',
        complete:true
      }
    ]
  }

}
