import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';

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
    this.redirectIfNotLoggedIn(); 
    this.createLoginForm();
  }

  redirectIfNotLoggedIn(): void{
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/']);
    }
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

    this.authService.login(this.loginForm.value).subscribe(
      result => {
        this.authService.saveUserData(result);
        this.authService.saveToken(result.token);
        this.router.navigate(['/']);
      },
      error => {
        this.sweetAlert.error(error?.error?.message)
      }
    );

  }

  get f(): FormGroup {
    return this.loginForm;
  }

  ngOnDestroy(): void {
    
  }
}
