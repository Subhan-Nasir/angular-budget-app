import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../../../shared/models/budget-item.model'

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit{

  @Input() item:BudgetItem = new BudgetItem(NaN, "");
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter();

  constructor(){

  }

  ngOnInit(){

  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();

  }

}
