import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAddProductsComponent } from '../dialog-add-products/dialog-add-products.component';
import { ListsService } from '../lists.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  list !: Product[];
  title !: string;
  index !: number;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    public listsService: ListsService
  ) { }

  ngOnInit() {
    let lists = this.listsService.lists;
    if (!lists[0]){
      this.router.navigate(["../home"])
      return
    }
    
    this.index = this.listsService.currentListIndex;
    this.list = lists[this.index].products;
    this.title = lists[this.index].name;
  }

  deleteList(){
    if(confirm("Sei sicuro di voler cancellare tutti gli elementi di "+this.title+"?")){
      this.list = this.listsService.lists[this.index].products = [];
    }
      
  }

  addList(): void {
    const dialogNewProduct = new MatDialogConfig();

    dialogNewProduct.data = {
      name : "prova",
    }

    const dialog = this.dialog.open(DialogAddProductsComponent, dialogNewProduct);
  
    dialog.afterClosed().subscribe(data => {
      if(!data)
        return
      
      this.listsService.addProduct(data);
    }) 
  }
}