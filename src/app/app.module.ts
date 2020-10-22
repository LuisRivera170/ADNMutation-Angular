// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { MutationComponent } from './components/mutation/mutation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MutationComponent
  ],
  imports: [
	AppRoutingModule,
    BrowserModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatFormFieldModule,
	MatInputModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
