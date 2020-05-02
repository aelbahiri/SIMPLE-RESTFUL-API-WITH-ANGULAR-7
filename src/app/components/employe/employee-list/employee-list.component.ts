import { RestApiService } from './../../../shared/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employee:any = [] ;

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
  
    this.loadEmployees();
  }

//Get employees list
loadEmployees(){
  return this.restApi.getEmployees().subscribe((data: {})=> {
    this.Employee = data;
  })
}

// Delete employeee
deleteEmployee(id){
  if(window.confirm('are you sure, you want to delete ?')){
    this.restApi.deleteEmployee(id).subscribe((date)=> {
      this.loadEmployees()
    })
  }
}
}
