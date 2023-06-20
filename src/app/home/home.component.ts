import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogAddListsComponent } from '../dialog-add-lists/dialog-add-lists.component';
import { ListsService } from '../lists.service';
import { List } from '../models/list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'ListaDellaSpesa';

  lists !: List[];
  canLoadLists: boolean = false;


  constructor(
    private dialog: MatDialog,
    private listsService: ListsService
  ) { }

  ngOnInit() {
    this.lists = this.listsService.lists
    if (this.lists[0])
      this.canLoadLists = true;
  }

  openDialog(): void {
    const dialogNewList = new MatDialogConfig();

    dialogNewList.data = {
      name: "prova"
    }

    const dialog = this.dialog.open(DialogAddListsComponent, dialogNewList);

    dialog.afterClosed().subscribe(data => {
      if (!data)
        return
      this.listsService.createList(data)

      if (this.lists[0])
        this.canLoadLists = true;
    })
  }
}