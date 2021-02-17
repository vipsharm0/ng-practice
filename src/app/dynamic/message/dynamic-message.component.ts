import { Component, Input } from "@angular/core";

@Component({
    selector:'dynamic-message',
    templateUrl:"dynamic-message.component.html",
    styleUrls:['dynamic-message.component.css']
})
export class DynamicMessage{
    @Input('name')name!:string;
 constructor(){

 }
}