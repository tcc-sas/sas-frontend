import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SweetAlertService } from 'src/app/shared/service/sweet-alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private sweetAlert: SweetAlertService
  ) { }
  

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/']);
    }
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
        console.log(result);
        this.authService.saveUserData(result);
        this.authService.saveToken(result.token);
        this.router.navigate(['/']);
      },
      error => {
        this.sweetAlert.error(error)
      }
    );

  }

  get f() {
    return this.loginForm;
  }

  ngOnDestroy(): void {
    
  }
}
