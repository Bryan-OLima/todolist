import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { List } from './DTOs/list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  public taskList: Array<List> = [];
  
  public placeholder: string = 'Enter you new task here...'
  public task: string = '';
  public taskListRetrieve: any = localStorage.getItem('taskList');


  fontAwesome = faTrash;

  noTask: number = this.taskList.length;

  constructor() {

  }

  ngOnInit(): void {
    if(this.taskListRetrieve){
      this.getLocalStorage();
    }
  }

  getLocalStorage(){
    this.taskList = JSON.parse(this.taskListRetrieve)
  }

  refreshLocalStorage(){
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  save() {
    this.taskList.push(
      {taskName: this.task, isChecked: false}
    )

    this.refreshLocalStorage();
    this.task = '';
  }

  delete(item: number){
    this.taskList.splice(item, 1);
    this.refreshLocalStorage();
  }

  deleteList() {
    if(confirm(`Press OK if you're sure that you want delete all ${this.taskList.length} tasks`)){
      this.taskList= [];
      this.refreshLocalStorage();
    }
  }

  deleteAll(){
    if(this.taskList.length == 0){
      alert('Your todolist is empty. Nothing to delete.');
    } else {
      this.deleteList();
    }
  }

  checkboxPos(index: number) {
    if(this.taskList[index].isChecked){
      this.taskList[index]['isChecked'] = false;
    } else {
      this.taskList[index]['isChecked'] = true
    }
    this.refreshLocalStorage();
  }
}
