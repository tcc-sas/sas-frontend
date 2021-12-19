import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/components/main/main.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './shared/components/login/login.component';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { AuthService } from './shared/service/auth.service';
import { UserService } from './service/user.service';
import { AuthGuard } from './core/guards/auth.guard';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    LoginComponent,
    BeneficiaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService, 
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
