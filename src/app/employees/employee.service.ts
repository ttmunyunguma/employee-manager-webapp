import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee";
import {Observable} from "rxjs";

const baseUrl = 'http://127.0.0.1:9999/api/v1';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  constructor(private http: HttpClient) {
  }

  getAllEmployees(): Observable<any>{
    return this.http.get<Employee>(`${baseUrl}/employees/`);
  }
}
