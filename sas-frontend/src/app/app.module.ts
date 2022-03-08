import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiaryModule } from './components/beneficiary/beneficiary.module';
import { LoginComponent } from './core/components/login/login.component';
import { LoginModule } from './core/components/login/login.module';
import { MainComponent } from './core/components/main/main.component';
import { NavComponent } from './core/components/nav/nav.component';
import { AuthGuard } from './core/guards/auth.guard';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { AuthService } from './core/service/auth.service';
import { BeneficiaryService } from './core/service/beneficiary.service';
import { UserService } from './core/service/user.service';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BeneficiaryModule,
    LoginModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    BeneficiaryService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }
  ],
  bootstrap: [
    AppComponent
  ],
 
})
export class AppModule { }
