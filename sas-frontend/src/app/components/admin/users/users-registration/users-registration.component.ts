import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/core/constants/components-constants';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
import { UserService } from 'src/app/core/service/user.service';
import { IConstants } from 'src/app/shared/models/constants.models';
import { IUser, User } from 'src/app/shared/models/user.model';
import {
  ConditionalPasswordRequired,
  ValidateObject,
} from 'src/app/shared/util/form-validators';

@Component({
  selector: 'app-users-registration',
  templateUrl: './users-registration.component.html',
  styleUrls: ['./users-registration.component.scss'],
})
export class UsersRegistrationComponent implements OnInit {
  constants: IConstants = Constants.users;
  userRegistrationForm!: FormGroup;
  selectOptions: any;
  user!: IUser;

  actionText: string = 'Cadastrar';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ) {
    this.retrieveSelectOptions();
  }

  ngOnInit(): void {
    this.createUserRegistrationForm();
    this.findUserById();
  }

  retrieveSelectOptions() {
    this.selectOptions = this.activatedRoute.snapshot.data?.selectOptions;
  }

  findUserById() {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (userId) {
      this.setActionText();
      this.userService.getUserById(userId).subscribe(
        (user) => {
          if (user) {
            this.user = user;
            this.createUserRegistrationForm(user);
          }
      }, (error) => {

      }
      );
    }
  }

  private setActionText(): void {
    this.actionText = 'Atualizar';
  }

  createUserRegistrationForm(user: IUser = new User()): void {
    this.userRegistrationForm = this.fb.group({
      id: [user['id']],
      name: [
        user.name,
        [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(45),
        ],
      ],
      username: [
        user.username,
        [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.minLength(6),
          Validators.maxLength(8),
          ConditionalPasswordRequired,
        ],
      ],
      roles: [user.roles, [Validators.required, ValidateObject]],
      cras: [user.cras, [Validators.required, ValidateObject]],
    });
  }

  onSubmit() {
    if (!this.userRegistrationForm.valid) {
      return alert('formulario invalido');
    }

    if (this.user?.id) {
      this.updateUser();
    } else {
      this.registerUser();
    }
  }

  private updateUser() {
    this.userService.updateUser(this.userRegistrationForm.value).subscribe(
      (success) => {
        console.log(success);
        this.sweetAlert
          .success('Atualizado com sucesso!')
          .then(() => this.router.navigate(['/admin/usuario']));
      },
      (error) => {
        console.log(error);
        this.sweetAlert.error(error?.error?.message);
      }
    );
  }

  private registerUser(): void {
    this.userService.registerUser(this.userRegistrationForm.value).subscribe(
      (success) => {
        console.log(success);
        this.sweetAlert
          .success('Cadastrado com sucesso!')
          .then(() => this.router.navigate(['/admin/usuario']));
      },
      (error) => {
        console.log(error);
        this.sweetAlert.error(error?.error?.message);
      }
    );
  }

  form(formField: string) {
    return this.userRegistrationForm.get(formField);
  }
}
