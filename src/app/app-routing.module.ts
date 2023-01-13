import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const todo: string = 'Todo List'

const routes: Routes = [
  { 
    path: '', 
    component: TodoListComponent, 
    title: `${todo} - Home`
  },
  { 
    path: '**', 
    component: NotFoundComponent, 
    title:`${todo} - 404`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
