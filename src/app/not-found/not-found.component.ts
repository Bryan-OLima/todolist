import { Component, OnInit} from '@angular/core';
import { List } from '../todo-list/DTOs/list';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit{
  
  public taskList: Array<List> = []; 

  testData: any;

  retrieveObj: any = localStorage.getItem('testObj');

  public name: string = '';

  ngOnInit(): void {
    this.localStorageRetrieve();
  }

  localStorageRetrieve(): any {
    this.taskList = JSON.parse(this.retrieveObj);
  }

  testFunction() {
    this.localStorageRetrieve();
    console.log(this.retrieveObj);
    console.log(this.taskList);
  }

  localStorageSave() {
    localStorage.setItem('testObj', JSON.stringify(this.taskList));
    console.log('enviando agora', JSON.stringify(this.taskList));
  }

  sendDataToSave(){
    this.taskList.push(
      {taskName: this.name, isChecked: false}
    );
    this.localStorageSave();
    this.name ='';
  }

}
