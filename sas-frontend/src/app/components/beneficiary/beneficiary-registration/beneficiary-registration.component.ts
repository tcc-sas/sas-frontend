import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/core/constants/components-constants';
import { BeneficiaryService } from 'src/app/core/service/beneficiary.service';
import {
  Beneficiary,
  IBeneficiary,
} from 'src/app/shared/models/beneficiary.models';
import { IConstants } from 'src/app/shared/models/constants.models';
import { ValidateObject } from 'src/app/shared/util/form-validators';

@Component({
  selector: 'app-beneficiary-registration',
  templateUrl: './beneficiary-registration.component.html',
  styleUrls: ['./beneficiary-registration.component.scss'],
})
export class BeneficiaryRegistrationComponent implements OnInit {
  constants: IConstants = Constants.beneficiary;
  beneficiaryRegistrationForm!: FormGroup;
  selectOptions: any;
  beneficiary!: IBeneficiary;

  actionText: string = 'Cadastrar';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private beneficiaryService: BeneficiaryService
  ) {}

  ngOnInit(): void {
    this.createBeneficiaryRegistrationForm();
    this.retrieveSelectOptions();
    this.findBeneficiaryById();
  }

  retrieveSelectOptions() {
    this.selectOptions = this.activatedRoute.snapshot.data?.[0];
  }

  findBeneficiaryById() {
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

  private setActionText(): void {
    this.actionText = 'Atualizar';
  }

  createBeneficiaryRegistrationForm(
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
      adress: [beneficiary.adress],
      houseNumber: [beneficiary.houseNumber],
      district: [beneficiary.district],
      city: [beneficiary.city],
      cras: [beneficiary.cras, [Validators.required, ValidateObject]],
    });
  }

  onSubmit() {
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
      .subscribe((result) => console.log(result));
  }

  private registerBeneficiary(): void {
    this.beneficiaryService
      .registerBeneficiary(this.beneficiaryRegistrationForm.value)
      .subscribe((result) => console.log(result));
  }

  form(formField: string) {
    return this.beneficiaryRegistrationForm.get(formField);
  }
}
