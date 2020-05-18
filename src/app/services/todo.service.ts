import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosLimit = "?_limit=5";
  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http:HttpClient) { }
  
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.url}${this.todosLimit}`);
  }

  deleteTodo(todo:Todo):Observable<Todo>{
    const urldel= `${this.url}/${todo.id}`;
    return this.http.delete<Todo>(urldel,httpOptions);
  }


  toggleCompleted(todo:Todo):Observable<any>{
    const urlPut= `${this.url}/${todo.id}`;
    return this.http.put(urlPut,todo, httpOptions);
  }

}
