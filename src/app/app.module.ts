import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { EmployeeCreateComponent } from './components/employe/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employe/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employe/employee-list/employee-list.component';

//HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
