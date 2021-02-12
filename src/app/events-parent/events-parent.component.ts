import { Component } from "@angular/core";

@Component({
    selector:"event-parent",
    templateUrl:"./events-parent.component.html",
    styleUrls:["./events-parent.component.scss"]
})
export class EventsParent{
    eventMessage!:string; 
    constructor(){

    }

    fnHandleClkEvt(){
        this.eventMessage = "Event emitted in parent!"
    }
}