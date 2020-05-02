import { EmployeeListComponent } from './components/employe/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employe/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './components/employe/employee-create/employee-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '' , pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
