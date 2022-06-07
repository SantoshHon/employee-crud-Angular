import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmployeeComponent } from './employee/add-new-employee/add-new-employee.component';
import { EmpolyeeDetailsComponent } from './employee/empolyee-details/empolyee-details.component';
import { GetAllEmployeesComponent } from './employee/get-all-employees/get-all-employees.component';
import { UpdateEmployeeDetailsComponent } from './employee/update-employee-details/update-employee-details.component';

const routes: Routes = [
  {path : '', redirectTo:'getellemployees',pathMatch: 'full'},
  { path: 'addemployee', component: AddNewEmployeeComponent },
  {path: 'getellemployees',component:GetAllEmployeesComponent},
  {path : 'employeedetails/:employeeId',component:EmpolyeeDetailsComponent},
  {path : 'updateemployee/:employeeId',component: UpdateEmployeeDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
