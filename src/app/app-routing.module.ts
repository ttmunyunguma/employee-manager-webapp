import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EmployeesComponent} from "./employees/employees.component";
import {CommonModule} from "@angular/common";
import {EmployeeDetailComponent} from "./employees/employee-detail/employee-detail.component";
import {EmployeeResolverService} from "./employees/employee-resolver.service";
import {EmployeeEditComponent} from "./employees/employee-edit/employee-edit.component";

const routes: Routes = [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent, children: [
      {path: 'add', component: EmployeeEditComponent},
      {path: ':id', component: EmployeeDetailComponent, resolve: EmployeeResolverService},
    ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
