import { Component, Input, OnInit } from "@angular/core";
import { addressbook } from "../models/addressbook";
import { Debtor } from "../models/debtor.model";
import { Idebtor } from "../models/Idebtor";
import { DebtorService } from "../services/debtors.service";

@Component({
    selector:"home-debtor",
    templateUrl:"./home-debtor.component.html",
    styleUrls:['./home-debtor.component.scss']
})
export class HomeDebtorComponent implements OnInit  {
     @Input() debtorlist!:Idebtor;
     addresslist!:addressbook[]
    addrb!: { cls: string; };
    constructor(private dtserv:DebtorService){
        
    }
    
    ngOnInit(){
        this.addrb = { cls: 'addressbook'};
        this.getAddresses();
    }

    getAddresses(){
        this.dtserv.getAddresses().subscribe(resp => {
            this.addresslist = resp;
        })
    }
}