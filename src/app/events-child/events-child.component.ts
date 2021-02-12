import { Component, Output,EventEmitter, ViewEncapsulation } from "@angular/core";

@Component({
    selector:"event-child",
    templateUrl:"./events-child.component.html",
    styleUrls:["./events-child.component.scss"],
    encapsulation:ViewEncapsulation.Emulated
})
export class Eventschild{
    @Output() eventsChildEvt:EventEmitter<boolean>   = new EventEmitter<boolean>();
    btnCls:object={'event-meta': true}
    clickMeta!:object;
    constructor(){

    }

    fnClick(){
        this.clickMeta=this.btnCls;
        this.eventsChildEvt.emit(true);
       }
}

