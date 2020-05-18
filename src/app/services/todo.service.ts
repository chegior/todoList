import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  
  getTodos(){
    return [
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
    ];
  }

}
