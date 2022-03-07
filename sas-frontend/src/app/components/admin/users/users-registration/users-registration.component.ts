import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlDirective,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/core/constants/components-constants';
import { UserService } from 'src/app/core/service/user.service';
import { IConstants } from 'src/app/shared/models/constants.models';
import { IUser, User } from 'src/app/shared/models/user/user.model';

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
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createUserRegistrationForm();
    this.retrieveSelectOptions();
    this.findUserById();
  }

  retrieveSelectOptions() {
    this.selectOptions = this.activatedRoute.snapshot.data?.selectOptions;
    console.log(this.selectOptions);
  }

  findUserById() {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (userId) {
      this.setActionText();
      this.userService.getUserById(userId).subscribe((user) => {
        if (user) {
          this.user = user;
          this.createUserRegistrationForm(user);
        }
      });

    }
  }
  
  private setActionText(): void {
    this.actionText = 'Atualizar';
  }

  createUserRegistrationForm(user: IUser = new User()): void {
    this.userRegistrationForm = this.fb.group({
      userId: [user['userId']],
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
          ConditionalPasswordRequired
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

    if (this.user?.userId) {
      this.updateUser();
    } else {
      this.registerUser();
    }
  }

  private updateUser() {
    this.userService.updateUser(this.userRegistrationForm.value).subscribe(result => console.log(result))
  }

  private registerUser(): void {
    this.userService
      .registerUser(this.userRegistrationForm.value)
      .subscribe((result) => console.log(result));
  }

  form(formField: string) {
    return this.userRegistrationForm.get(formField);
  }


}

export function ConditionalPasswordRequired(control: AbstractControl) {
  if(control.parent?.get('userId')?.value){
    return null;
  }
  return Validators.required(control)
}

export function ValidateObject(control: AbstractControl) {
  if (Object.values(control.value).every((value) => value)) {
    return null;
  }
  return { invalidObject: true };
}
