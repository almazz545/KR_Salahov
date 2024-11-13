import BookForm from '../view/ExpenseForm.js'
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/tasks-board-component.js';
import {render} from '../framework/render.js';

import ExpenseListComponent from "../view/ExpenseFilter.js";
import ExpenseComponent from "../view/ExpenseList.js";


export default class TasksBoardPresenter {
  ExpenseForm;

    
 taskListComponent = new TasksListComponent();


 constructor({boardContainer}) {
   this.boardContainer = boardContainer;
 }


 init() {
   render(this.tasksBoardComponent, this.boardContainer);
   for (let i = 0; i < 4; i++) {
       const tasksListComponent = new TasksListComponent();
       render(tasksListComponent, this.tasksBoardComponent.getElement());
      
       for (let j = 0; j < 4; j++) {
           const taskComponent = new TaskComponent();
           render(taskComponent, tasksListComponent.getElement());
       }
   }
 
 }
}
