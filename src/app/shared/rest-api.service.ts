import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API 

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  //CRUD methods  for consuming api RESTful API

  // Http Options 
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'applications/json'
  })
}

//HttpClient API get () methode => fetch employees list
getEmployees(): Observable<Employee> {
  return this.http.get<Employee>(this.apiUrl + '/employees')
  .pipe(
    retry(1),
    catchError(this.handleError) 
  )
}

//HttpClient API get () methode => fetch employee
getEmployee(id):Observable<Employee> {
  return this.http.get<Employee>(this.apiUrl + '/employees/' + id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// HttpClient API post() methode => create employee
createEmployee(employee):Observable<Employee> {
  return this.http.post<Employee>(this.apiUrl + '/employees', JSON.stringify(employee), this.httpOptions )
.pipe(
  retry(1),
  catchError(this.handleError)
)
}

//HttpClient API put () methode => update employee
updateEmployee(id, employee):Observable<Employee> {
  return this.http.put<Employee>(this.apiUrl + 'employees/' + id, JSON.stringify(employee), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

//HttpClient API delete () methode => Delete employee
deleteEmployee(id):Observable<Employee> {
  return this.http.delete<Employee>(this.apiUrl + '/employees/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// Error handling
handleError(error){
  let errorMessage = '' ;
  if(error.error instanceof ErrorEvent ){
    //Get Client-side error
    errorMessage = error.error.message ;
  }else{
    //get server side  error
    errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}




}
