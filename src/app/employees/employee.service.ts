import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee";
import {Observable, Subject} from "rxjs";
import {tap} from "rxjs/operators";

const baseUrl = 'http://127.0.0.1:9999/api/v1';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
  private employees: Employee[];
  employeeChanged = new Subject<Employee[]>();

  constructor(private http: HttpClient) {
  }

  setEmployees(employees: Employee[]){
    console.log("*****set employees");
    this.employees = employees;
    this.employeeChanged.next(this.employees.slice())
  }

  getAllEmployees(){
    console.log("*****get employees");
    return this.employees.slice();
  }
  getEmployeeById(id: number): Observable<any>{
    return this.http.get<Employee>(`${baseUrl}/employees/${id}`);
  }

  fetchEmployees(): Observable<any>{
    console.log("*****http fetch called");
    return this.http.get<Employee[]>(`${baseUrl}/employees/`).pipe(
      tap(response => {
        this.setEmployees(response);
      })
    );
  }
}
