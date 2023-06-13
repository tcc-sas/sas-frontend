import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/core/constants/components-constants';
import { MemoService } from 'src/app/core/service/memo.service';
import { StockService } from 'src/app/core/service/stock.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
import { IConstants } from 'src/app/shared/models/constants.models';
import {
  FIRST_MEMO_STATUS,
  FIRST_STATUS_DELIVERY,
  IMemo,
  IMemoRegistrationOption,
  IMemoRegistrationProduct,
  MemoRegistrationProduct,
} from 'src/app/shared/models/memo.models';
import { IStockProduct, IStockProductRegistration } from 'src/app/shared/models/stock.models';
import { copyObject } from 'src/app/shared/util/util';

@Component({
  selector: 'app-memo-registration',
  templateUrl: './memo-registration.component.html',
  styleUrls: ['./memo-registration.component.scss'],
})
export class MemoRegistrationComponent implements OnInit {
  constants: IConstants = Constants.memo;
  selectOptions!: IMemoRegistrationOption;

  currentProduct = this.memoProductRegistrationFactory();

  productsList: IMemoRegistrationProduct[] = [];

  memo!: IMemo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memoService: MemoService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.retrieveSelectOptions();
    this.findMemoById();
  }

  retrieveSelectOptions() {
    this.selectOptions = this.activatedRoute.snapshot.data?.[0];
  }

  findMemoById(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.memoService
        .getMemoById(id)
        .subscribe((memo) => {
          if (memo) {
            this.handleMemoByIdObject(memo);
          }
        });
    }
  }

  addProductToList() {
    const obj = copyObject(this.currentProduct) as IMemoRegistrationProduct;

    this.productsList.push(obj);

    const productIndex = this.selectOptions.products.findIndex(
      (p) => p.name === this.currentProduct.name
    );
    if (productIndex !== -1) {
      this.selectOptions.products.splice(productIndex, 1);
    }
    this.currentProduct = this.memoProductRegistrationFactory();
  }

  removeProductsFromList(row: any, i: number) {
    this.selectOptions.products.push(row as IStockProduct);
    this.productsList.splice(i, 1);
    this.currentProduct = this.memoProductRegistrationFactory();
  }

  memoProductRegistrationFactory() {
    return new MemoRegistrationProduct();
  }

  saveInStock(){

    console.log(this.productsList)

    const defaultStatusMemo = this.selectOptions.statusMemo.find(st => st === FIRST_MEMO_STATUS) ?? '';
    const defaultDeliveryStatus = this.selectOptions.statusDelivery.find(st => st === FIRST_STATUS_DELIVERY) ?? '';
    const orderedProducts = JSON.stringify(this.productsList);
    
    const memo: IMemo = {
      id: null,
      requestDate: this.getArrayFromDate(new Date),
      statusMemo: defaultStatusMemo,
      statusDelivery: defaultDeliveryStatus,
      orderedProducts: orderedProducts,
      deliveredProducts: ''
    }

    if(this.productsList.length){
      this.memoService
      .registerMemo(memo)
      .subscribe((result) => {
        this.sweetAlert
          .success('Cadastrado com sucesso!')
          .then(() => this.router.navigate(['/memorando']))
      });
    }
  }

  disableAddButton(){
    if(!this.currentProduct.name) {
      return true;
    }
    return false;
  }


  getArrayFromDate(date: Date){
    const dd = date.getDate()
    const mm = date.getMonth()
    const yy = date.getFullYear();
    const hh = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return [yy, mm, dd, hh, min, sec]
  }

  handleMemoByIdObject(memo: IMemo) {
    this.memo = memo;

    if(memo.orderedProducts) {
      this.memo.orderedProductsArray = JSON.parse(memo.orderedProducts as string);
    }

    if(memo.deliveredProducts) {
      this.memo.deliveredProductsArray = JSON.parse(memo.deliveredProducts as string);
    }
  }

  updateStatus(status: string){

    
  }

}


