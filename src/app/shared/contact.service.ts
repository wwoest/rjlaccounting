import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = "https://mailthis.to/rjl";

  constructor(private http: HttpClient) { }

  emailMessage(input: any) {

     const headers = new HttpHeaders({
        'responseType': 'text',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
        'Content-Type':'application/json; charset=utf-8',
        'myCustomHeader':'itsolutionstuff.com'
      });

      const requestOptions = { headers: headers };
      

    return this.http.post(this.api, input, requestOptions)
    .pipe(
      map(
        (response) => {
          if (response) {
            return response;
          } else {
            return new Error("uh");
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
