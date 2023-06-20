import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OperationsMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAddProductsComponent } from './dialog-add-products/dialog-add-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AmountButtonComponent } from './amount-button/amount-button.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DialogAddListsComponent } from './dialog-add-lists/dialog-add-lists.component';
import { ListsService } from './lists.service';
import { ListCardComponent } from './list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogAddProductsComponent,
    ProductsListComponent,
    AmountButtonComponent,
    ProductComponent,
    HomeComponent,
    DialogAddListsComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OperationsMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
