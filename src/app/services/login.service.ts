import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()

export class ServLogin{

    fakeData!:string;

    constructor(private http:HttpClient){
   
    }

    getCredentials(): Observable<any> {
        return this.http.get("assets/data.json").pipe(
            map((data:any) => {  return data["Credentials"] })
        )
    }
    
}