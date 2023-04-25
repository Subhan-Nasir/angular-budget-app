import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../../../shared/models/budget-item.model';
import { UpdateEvent } from '../../../shared/models/update-event.model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{


  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor(){

  }
 
  ngOnInit(){ 
    this.budgetItems.push(new BudgetItem(1000, "income 1"));
    this.budgetItems.push(new BudgetItem(2000, "income 2"));
    this.budgetItems.push(new BudgetItem(3000, "income 3"));

    this.budgetItems.push(new BudgetItem(-100, "expense 1"));
    this.budgetItems.push(new BudgetItem(-200, "expense 2"));
    this.budgetItems.push(new BudgetItem(-300, "expense 2"));

    this.calcTotalBudget();

  }
   
  addItem(newItem:BudgetItem){
    this.budgetItems.push(newItem);
    this.calcTotalBudget();

  }

  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.calcTotalBudget();
  }

  calcTotalBudget(){
    this.totalBudget = 0;
    this.budgetItems.forEach(item => {
      this.totalBudget += item.amount;
      
    });
 
  }

  updateItem(updateEvent: UpdateEvent){
    this.budgetItems[this.budgetItems.indexOf(updateEvent.oldItem)] = updateEvent.newItem;
    this.calcTotalBudget();

     
  }
    


}
