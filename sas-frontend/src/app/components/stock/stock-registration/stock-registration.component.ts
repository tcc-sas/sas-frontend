import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/core/constants/components-constants';
import { StockService } from 'src/app/core/service/stock.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
import { IConstants } from 'src/app/shared/models/constants.models';
import { IStockProductRegistration, StockProductRegistration, StockRegistrationOptions } from 'src/app/shared/models/stock.models';
import { copyObject } from 'src/app/shared/util/util';

@Component({
  selector: 'app-stock-registration',
  templateUrl: './stock-registration.component.html',
  styleUrls: ['./stock-registration.component.scss'],
})
export class StockRegistrationComponent implements OnInit {
  constants: IConstants = Constants.stock;
  selectOptions!: StockRegistrationOptions;

  currentProduct = this.stockProductRegistrationFactory();

  productsList: IStockProductRegistration[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private stockService: StockService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.retrieveSelectOptions();
  }

  retrieveSelectOptions() {
    this.selectOptions = this.activatedRoute.snapshot.data?.[0];
  }

  onChangeProduct(){
    this.currentProduct.productQuantity = this.currentProduct.product.quantity;
  }


  addProductToList(){
    const obj = copyObject(this.currentProduct) as IStockProductRegistration;
    obj.product.quantity = obj.productQuantity;
    this.productsList.push(obj)
    
    const productIndex = this.selectOptions.products.findIndex(p => p.id === this.currentProduct.product.id);
    if(productIndex !== -1){
      this.selectOptions.products[productIndex].quantity -= this.currentProduct.productQuantity;

      if(this.selectOptions.products[productIndex].quantity <= 0) {
        this.selectOptions.products.splice(productIndex, 1);
      }
    }
    
    this.currentProduct = this.stockProductRegistrationFactory();
  }

  removeProductsFromList(row: IStockProductRegistration, i: number){
    
   const index = this.selectOptions.products.findIndex(prod => prod.id === row.product.id);

   if(index !== -1) {
      this.selectOptions.products[index].quantity += row.productQuantity;
   } else {
    this.selectOptions.products.push(row.product);
   }

   this.productsList.splice(i, 1);
   this.currentProduct = this.stockProductRegistrationFactory();
  }

  stockProductRegistrationFactory(){
    return new StockProductRegistration();
  }

  disableAddButton(){
    if(!this.currentProduct.product.id || !this.currentProduct.cras?.id || !this.currentProduct.productQuantity) {
      return true;
    }
    return false;
  }

  saveInStock(){
    if(this.productsList.length){
      this.stockService
      .saveProductsInStock(this.productsList)
      .subscribe((result) => {
        this.sweetAlert
          .success('Cadastrado com sucesso!')
          .then(() => this.router.navigate(['/estoque']))
      });
    }
  }



  

}
