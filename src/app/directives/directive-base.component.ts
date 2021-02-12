import { componentFactoryName } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:"directive-base",
    templateUrl:"./directive-base.component.html",
    styleUrls:["./directive-base.component.scss"]
})
export class DirectiveBase{
    showDiv:boolean=true;
    constructor(){

    }
    toggleDirective(){
        this.showDiv=!this.showDiv;
    }
}