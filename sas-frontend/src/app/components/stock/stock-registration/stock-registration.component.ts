import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/core/constants/components-constants';
import { StockService } from 'src/app/core/service/stock.service';
import { IConstants } from 'src/app/shared/models/constants.models';
import { IStock } from 'src/app/shared/models/stock.models';
import { ValidateObject } from 'src/app/shared/util/form-validators';

@Component({
  selector: 'app-stock-registration',
  templateUrl: './stock-registration.component.html',
  styleUrls: ['./stock-registration.component.scss'],
})
export class StockRegistrationComponent implements OnInit {
  constants: IConstants = Constants.stock;
  stockRegistrationForm!: FormGroup;
  selectOptions: any;
  stock!: IStock;

  actionText: string = 'Cadastrar';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    // this.createStockRegistrationForm();
    this.retrieveSelectOptions();
  }

  retrieveSelectOptions() {
    this.selectOptions = this.activatedRoute.snapshot.data?.[0];
  }

  private setActionText(): void {
    this.actionText = 'Atualizar';
  }

  // createStockRegistrationForm(
  //   beneficiary: IStock = new Stock()
  // ): void {
  //   this.stockRegistrationForm = this.fb.group({
  //     id: [beneficiary['id']],
  //     name: [
  //       beneficiary.name,
  //       [
  //         Validators.minLength(3),
  //         Validators.required,
  //         Validators.maxLength(45),
  //       ],
  //     ],
  //     rg: [beneficiary.rg],
  //     cpf: [beneficiary.cpf, [Validators.required]],
  //     birthDate: [beneficiary.birthDate, [Validators.required]],
  //     phoneNumber: [beneficiary.phoneNumber],
  //     zipCode: [beneficiary.zipCode],
  //     adress: [beneficiary.adress],
  //     houseNumber: [beneficiary.houseNumber],
  //     district: [beneficiary.district],
  //     city: [beneficiary.city],
  //     cras: [beneficiary.cras, [Validators.required, ValidateObject]],
  //   });
  // }

  onSubmit() {
    if (this.stockRegistrationForm.invalid) {
      return;
    }

    
  }

 
  form(formField: string) {
    return this.stockRegistrationForm.get(formField);
  }
}
