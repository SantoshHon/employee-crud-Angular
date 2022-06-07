import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-empolyee-details',
  templateUrl: './empolyee-details.component.html',
  styleUrls: ['./empolyee-details.component.css']
})
export class EmpolyeeDetailsComponent implements OnInit {
employee: Employee=new Employee();
employeeId : number=0;
  constructor(private employeeCRUDService: EmployeeServiceService,private  route : ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId= this.route.snapshot.params['employeeId'];
    this.loadEmployeeDetails(this.employeeId);
  }
loadEmployeeDetails(employeeId: number)
{
this.employeeCRUDService.getSingleEmployee(employeeId).subscribe
(
  data => {
    this.employee = data;
  }
);
}
}
