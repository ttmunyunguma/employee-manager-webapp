import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Employee} from "../models/employee";
import {EmployeeService} from "./employee.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<Employee>{

  constructor(private employeeService: EmployeeService) {
    console.log("*****resolver called")
  }

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const employees = this.employeeService.getAllEmployees();
    if(employees.length === 0)
      return this.employeeService.fetchEmployees();
    else
      return employees;
  }
}
