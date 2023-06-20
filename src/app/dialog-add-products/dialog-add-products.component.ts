import { Component, Inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ProductData {
  name: string;
  amount: number;
  isAmountClicked: boolean;
}

@Component({
  selector: 'dialog-add-products',
  templateUrl: './dialog-add-products.component.html',
  styleUrls: ['./dialog-add-products.component.scss']
})
export class DialogAddProductsComponent{

  name: string = "";
  isAmountClicked: boolean = false;
  amount: number = 1;

  constructor(
    private fb: NonNullableFormBuilder,
    private dialogRef: MatDialogRef<DialogAddProductsComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {

  }

  productForm = this.fb.group({
    name: "",
    amount: 1,
  })

  onClick(condition: boolean) {
    this.isAmountClicked = condition;
  }

  incDecClick(increment: boolean) {
    if (!increment)
      if (this.amount == 1)
        return
      else
        --this.amount;
    else
      ++this.amount;
  }

  onChangeAmount() {
    if (this.amount < 0)
      this.amount = Math.abs(this.amount);
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.productForm.value);
  }

}
