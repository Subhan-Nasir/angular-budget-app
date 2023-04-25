import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../../../shared/models/budget-item.model';
import { UpdateEvent } from '../../../shared/models/update-event.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})


export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = new Array<BudgetItem>();
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>(); 

  constructor(public dialog: MatDialog){}

  ngOnInit(){

  }

  onDeleteButtonClicked(item:BudgetItem){
    this.delete.emit(item);
  }
 
  onCardClicked(item: BudgetItem){
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: "580px",
      data: item
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if(result){
          // this.budgetItems[this.budgetItems.indexOf(item)] = result;
          this.update.emit({oldItem:item, newItem:result});
        }
      }
    )
     
  }

}
