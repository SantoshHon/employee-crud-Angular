import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../pojo/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseURL : string = "http://localhost:8080/employeecrud/employee";

  constructor(private http: HttpClient) { }

  addEmployee (employee : Employee ) : Observable<boolean> {
    console.log("in EmployeeCRUDService");
    console.log(employee);
    console.log("EmployeeCRUDservce end");

    return this.http.post <boolean>(this.baseURL , employee);
  
  }
  getAllEmployees() :Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.baseURL);
  }
  deleteEmployee(employeeId : number) :Observable<boolean>
  {
    console.log('In delete Employee'+ employeeId);
    return this.http.delete<boolean>(this.baseURL + '/'+ employeeId);
  }
  getSingleEmployee(employeeId: number): Observable<Employee>
  {
    console.log('in getSingleEmployee()'+employeeId)
    return this.http.get<Employee>(this.baseURL+"/"+employeeId);

  }
  updateEmployee(employee: Employee):Observable<boolean>
  {
     return this.http.put<boolean>(this.baseURL,employee);
  }
}
