import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Idebtor } from "../models/Idebtor";
import { Lend } from "../models/lendmodel";

@Injectable()
export class DebtorService{
    lendObj!:Idebtor;
    constructor (private http:HttpClient){}

    getDebtors(){
        // this.lendObj = new Lend()
        return this.http.get<Idebtor>("assets/data.json")
        .pipe(            
            map((result:Idebtor) => {
                this.lendObj = result;
                return this.lendObj
            } )
        )
    }

    getAddresses(){
        // this.lendObj = new Lend()
        return this.http.get<Idebtor>("assets/data.json").pipe(            
            map((result:Idebtor) => {
                this.lendObj = result;
                return this.lendObj.addressbook
            } )
        )
    }
}