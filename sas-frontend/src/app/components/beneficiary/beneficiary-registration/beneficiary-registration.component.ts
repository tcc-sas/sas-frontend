import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/core/constants/components-constants';
import { BeneficiaryService } from 'src/app/core/service/beneficiary.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
import {
  Beneficiary,
  BeneficiaryProductDTO,
  IBeneficiary,
  IBeneficiaryProductDTO,
  ISimpleProduct,
  SimpleProduct
} from 'src/app/shared/models/beneficiary.models';
import { IConstants } from 'src/app/shared/models/constants.models';
import { ValidateObject } from 'src/app/shared/util/form-validators';
import { copyObject } from 'src/app/shared/util/util';

@Component({
  selector: 'app-beneficiary-registration',
  templateUrl: './beneficiary-registration.component.html',
  styleUrls: ['./beneficiary-registration.component.scss'],
})
export class BeneficiaryRegistrationComponent implements OnInit {
  //beneficiary
  constants: IConstants = Constants.beneficiary;
  beneficiaryRegistrationForm!: FormGroup;
  selectOptions: any;
  beneficiary!: IBeneficiary;
  actionText: string = 'Cadastrar';

  registerScreen = 'beneficiary';

  //products
  productsOptions: any;
  currentProduct: ISimpleProduct = new SimpleProduct();
  products: IBeneficiaryProductDTO = new BeneficiaryProductDTO();


  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private beneficiaryService: BeneficiaryService,
    private sweetAlert: SweetAlertService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.createBeneficiaryRegistrationForm();
    this.retrieveSelectOptions();
    this.findBeneficiaryById();
    this.findBeneficiaryProducts();
  }

  private retrieveSelectOptions() {
    this.selectOptions = this.activatedRoute.snapshot.data?.[0];
    this.productsOptions = this.activatedRoute.snapshot.data?.[1];
  }

  private findBeneficiaryById(): void {
    const beneficiaryId = this.activatedRoute.snapshot.paramMap.get('id');
    if (beneficiaryId) {
      this.setActionText();
      this.beneficiaryService
        .getBeneficiaryById(beneficiaryId)
        .subscribe((beneficiary) => {
          if (beneficiary) {
            this.beneficiary = beneficiary;
            this.createBeneficiaryRegistrationForm(beneficiary);
          }
        });
    }
  }

  private findBeneficiaryProducts(): void {
    const beneficiaryId = this.activatedRoute.snapshot.paramMap.get('id');
    if (beneficiaryId) {
      this.beneficiaryService.getBeneficiaryProducts(beneficiaryId).subscribe(
        (result) => {
          this.products = result;
        },
        (error) => {
          
        }

      )
    }
  }

  private setActionText(): void {
    this.actionText = 'Atualizar';
  }

  private createBeneficiaryRegistrationForm(
    beneficiary: IBeneficiary = new Beneficiary()
  ): void {
    this.beneficiaryRegistrationForm = this.fb.group({
      id: [beneficiary['id']],
      name: [
        beneficiary.name,
        [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(45),
        ],
      ],
      rg: [beneficiary.rg],
      cpf: [beneficiary.cpf, [Validators.required]],
      birthDate: [beneficiary.birthDate, [Validators.required]],
      phoneNumber: [beneficiary.phoneNumber],
      zipCode: [beneficiary.zipCode],
      address: [beneficiary.address],
      houseNumber: [beneficiary.houseNumber],
      district: [beneficiary.district],
      city: [beneficiary.city],
      cras: [beneficiary.cras, [Validators.required, ValidateObject]],
    });
  }

  protected onSubmit() {
    if (this.beneficiaryRegistrationForm.invalid) {
      return;
    }

    if (this.beneficiary?.id) {
      this.updateBeneficiary();
      console.log(this.beneficiaryRegistrationForm.value);
    } else {
      console.log(this.beneficiaryRegistrationForm.value);
      this.registerBeneficiary();
    }
  }

  private updateBeneficiary() {
    this.beneficiaryService
      .updateBeneficiary(this.beneficiaryRegistrationForm.value)
      .subscribe((result) => {
        this.sweetAlert
          .success('Atualizado com sucesso!')
          .then(() => this.router.navigate(['/beneficiario']));
      });
  }

  private registerBeneficiary(): void {
    this.beneficiaryService
      .registerBeneficiary(this.beneficiaryRegistrationForm.value)
      .subscribe((result) => {
        this.sweetAlert
          .success('Cadastrado com sucesso!')
          .then(() => this.router.navigate(['/beneficiario']));
      });
  }

  protected form(formField: string) {
    return this.beneficiaryRegistrationForm.get(formField);
  }

  protected changeScreen(screen: string) {
    this.registerScreen = screen;
  }

  protected addProductToList(){

    if(this.currentProduct.name == '' || this.currentProduct.quantity == 0) {
      return;
    }

    const obj: ISimpleProduct = copyObject(this.currentProduct);
    const index = this.products.productsDTO.findIndex(x => x.id == obj.id);

    if(index !== -1) {
      this.products.productsDTO[index].quantity += obj.quantity;
    } else {
      this.products.productsDTO.push(obj);
    }

    this.currentProduct = new SimpleProduct();
    
  }

  protected removeProductsFromList(row: any, i: any){
    this.products.productsDTO.splice(i, 1);
  }

  protected saveBeneficiaryProducts() {
    this.products.beneficiaryId = this.beneficiary.id;
    this.beneficiaryService.registerBeneficiaryProduct(this.products).subscribe(
      (result) => {
        this.sweetAlert
          .success('Cadastrado com sucesso!')
          .then(() => this.router.navigate(['/beneficiario']));
      },
      (error) => {
        this.sweetAlert
        .error(error.error)
      }
    );
  }

}
