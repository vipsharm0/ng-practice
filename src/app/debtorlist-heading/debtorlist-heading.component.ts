import { Component, Input } from "@angular/core";

@Component({
    selector:"debtorlist-head",
    templateUrl:"./debtorlist-heading.component.html",
    styleUrls:["./debtorlist-heading.component.scss"]
})
export class DebtorsHeading{
@Input() dtLength!:number;
}