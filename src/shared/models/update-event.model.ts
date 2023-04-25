import { BudgetItem } from "./budget-item.model";

export interface UpdateEvent{
    newItem: BudgetItem;
    oldItem: BudgetItem;
}
  