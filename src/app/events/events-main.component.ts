import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"event-main",
    templateUrl:"./events-main.component.html",
    styleUrls:["./events-main.component.scss"]
})
export class EventsMain{
 
    constructor(private router:Router){

    }

    eventClick(){
        this.router.navigate(['Home/Events/Main']);
    }

    localTempRefClick(){
        this.router.navigate(['Home/Events/localref'])
    }

    projectionClick(){
        this.router.navigate(['Home/Events/Projection'])
    }
    directiveClick(){
        this.router.navigate(['Home/Events/Directives'])
    }
    dynamiCompClick(){
        this.router.navigate(['Home/Events/Dynamic'])
        
    }
}