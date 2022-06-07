import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.css']
})
export class GetAllEmployeesComponent implements OnInit {
  allEmployee : Employee []=[];

  constructor( private employeeCRUDService : EmployeeServiceService ,private router:Router) {}

   

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData()
  {
    this.employeeCRUDService.getAllEmployees().subscribe(
      data =>{
        this.allEmployee=data;
        console.log(this.allEmployee)
      }
    );
  }


  deleteEmployee(employeeId :number)
  {
    this.employeeCRUDService.deleteEmployee(employeeId).subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      }
      
    );
   
  }
  getdetails(employeeId: number){
    console.log(employeeId);
    this.router.navigate(['/employeedetails',employeeId]);
  }

  updateEmployeeDetails(employeeId : number)
  {
   console.log(employeeId);
   this.router.navigate(['/updateemployee',employeeId]);
  }



}
