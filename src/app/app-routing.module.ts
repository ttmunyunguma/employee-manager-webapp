import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EmployeesComponent} from "./employees/employees.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
