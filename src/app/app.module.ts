import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeesComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
