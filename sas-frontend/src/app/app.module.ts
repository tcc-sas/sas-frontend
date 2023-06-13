import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiaryModule } from './components/beneficiary/beneficiary.module';
import { CoveredModule } from './components/covered/covered.module';
import { MemoModule } from './components/memo/memo.module';
import { StockModule } from './components/stock/stock.module';
import { LoginModule } from './core/components/login/login.module';
import { MainComponent } from './core/components/main/main.component';
import { NavComponent } from './core/components/nav/nav.component';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { CrasPipe } from './shared/util/cras.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
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
    RouterModule,
    LoginModule,
    StockModule,
    BeneficiaryModule,
    CoveredModule,
    MemoModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor, 
      multi: true,
    }
    // ,
    // {
    //   provide: ErrorHandler,
    //   useClass: Teste
    // }   
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptor, 
    //   multi: true,
    // },
  ],
  bootstrap: [
    AppComponent
  ],

 
})
export class AppModule { }
