import { Component, Inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-lists',
  templateUrl: './dialog-add-lists.component.html',
  styleUrls: ['./dialog-add-lists.component.scss']
})
export class DialogAddListsComponent {

  name: string = "";

  constructor(
    private fb: NonNullableFormBuilder,
    private dialogRef: MatDialogRef<DialogAddListsComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {

  }

  listForm = this.fb.group({
    name: "",
  })

  close() {
    this.dialogRef.close(false);
  }

  save() {
    this.dialogRef.close(
      this.listForm.value.name);
  }
}