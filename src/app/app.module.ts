// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Components
import { AppComponent } from './app.component';
import { MutationComponent } from './components/mutation/mutation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MutationComponent,
    LoginComponent
  ],
  imports: [
	AppRoutingModule,
    BrowserModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatFormFieldModule,
	MatInputModule,
	FormsModule,
	ReactiveFormsModule,
	MatSnackBarModule
  ],
  providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
