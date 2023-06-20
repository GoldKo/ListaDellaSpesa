import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product !: Product;

  constructor(private listsService : ListsService) {}


  deleteProduct(){
    this.listsService.removeProduct(this.product);
  }

}
