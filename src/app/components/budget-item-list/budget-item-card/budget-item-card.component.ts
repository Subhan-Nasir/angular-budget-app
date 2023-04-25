import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { BudgetItem } from '../../../../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem(NaN, "");
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(){

  }

  ngOnInit(){

  }

  onXbuttonClick(){
    this.xButtonClick.emit();
  }

  onCardClick(){
    this.cardClick.emit();
  }

}
