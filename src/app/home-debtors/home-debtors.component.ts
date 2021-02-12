import { Component, OnInit } from "@angular/core";
import { Debtor } from "../models/debtor.model";
import { Idebtor } from "../models/Idebtor";
import { DebtorService } from "../services/debtors.service";

@Component({
selector:"debtors-list",
templateUrl:"./home-debtors.component.html",
styleUrls:["./home-debtors.component.scss"]
})


export class DebtorsComponent implements OnInit{
    debtorData!:Idebtor;
    debtorLength:number=0;
    constructor(private debtorserv: DebtorService){
    }
    ngOnInit() {
        this.debtorserv.getDebtors().subscribe((data:Idebtor) => {
        
            this.debtorData = data;
            this.debtorLength = this.debtorData.debtors.length;
        })
    }


}