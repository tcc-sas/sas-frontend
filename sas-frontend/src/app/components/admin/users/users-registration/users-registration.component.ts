import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from 'src/app/core/constants/components-constants';
import { IConstants } from 'src/app/shared/models/constants.models';

@Component({
  selector: 'app-users-registration',
  templateUrl: './users-registration.component.html',
  styleUrls: ['./users-registration.component.scss']
})
export class UsersRegistrationComponent implements OnInit {
  constants: IConstants = Constants.users;
  userRegistrationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createUserRegistrationForm();
  }

  createUserRegistrationForm(): void{
    this.userRegistrationForm = this.fb.group({
      userId: [''],
      name: [''],
      username: [''],
      password: [''],
      roles: [''],
      cras: [''],
    });
  }

  onSubmit(){

  }

}
