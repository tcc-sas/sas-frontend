import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Constants } from 'src/app/core/constants/components-constants';
import { ProductService } from 'src/app/core/service/product.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
import { IConstants } from 'src/app/shared/models/constants.models';
import { IProduct, Product } from 'src/app/shared/models/product.models';

@Component({
  selector: 'app-products-registration',
  templateUrl: './products-registration.component.html',
  styleUrls: ['./products-registration.component.scss'],
})
export class ProductsRegistrationComponent implements OnInit {
  constants: IConstants = Constants.products;
  productRegistrationForm!: FormGroup;
  selectOptions: any;
  product!: IProduct;

  actionText: string = 'Cadastrar';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ) {
    this.retrieveSelectOptions();
  }

  ngOnInit(): void {
    this.createProductRegistrationForm();
    this.findProductById();
  }

  retrieveSelectOptions() {
    this.selectOptions = this.activatedRoute.snapshot.data?.selectOptions;
  }

  findProductById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.setActionText();
      this.productService.getProductById(id).subscribe((product) => {
        if (product) {
          this.product = product;
          this.createProductRegistrationForm(product);
        }
      });
    }
  }

  private setActionText(): void {
    this.actionText = 'Atualizar';
  }

  createProductRegistrationForm(product: IProduct = new Product()): void {
    this.productRegistrationForm = this.fb.group({
      id: [product['id']],
      productId: [product.productId],
      name: [product.name],
      unity: [product.unity],
      description: [product.description],
      availableQuantity: [product.availableQuantity],
    });
  }

  onSubmit() {
    if (!this.productRegistrationForm.valid) {
      return alert('formulario invalido');
    }

    if (this.product?.id) {
      this.updateProduct();
    } else {
      this.registerProduct();
    }
  }

  private updateProduct() {
    this.productService
      .updateProduct(this.productRegistrationForm.value)
      .subscribe((result) =>
        this.sweetAlert
          .success('Atualizado com sucesso!')
          .then(() => this.router.navigate(['/admin/produto']))
      );
  }

  private registerProduct(): void {
    this.productService
      .registerProduct(this.productRegistrationForm.value)
      .subscribe((result) =>
        this.sweetAlert
          .success('Cadastrado com sucesso!')
          .then(() => this.router.navigate(['/admin/produto']))
      );
  }

  form(formField: string) {
    return this.productRegistrationForm.get(formField);
  }
}
