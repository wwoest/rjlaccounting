import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = "https://mailthis.to/rjl";

  constructor(private http: HttpClient) { }

  emailMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' })
    .pipe(
      map(
        (response) => {
          if (response) {
            return response;
          } else {
            return new Error("Not able to send e-mail.");
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
