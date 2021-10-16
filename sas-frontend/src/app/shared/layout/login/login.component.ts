import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { RouteConfigLoadEnd } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }
  

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: [
        '', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]
      ],
      password: [
        '', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
        ]
      ],
    });
  }

  

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched()
    }

    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(
      result => {
        console.log(result)
        this.authService.saveUserData(result)
        this.authService.saveToken(result.token)
      },
      error => {
        console.log(error);
      }
    );

  }

  get f() {
    return this.loginForm;
  }

  ngOnDestroy(): void {
    
  }
}
