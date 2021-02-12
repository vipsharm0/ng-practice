import { Component, ContentChild, ElementRef, OnInit } from "@angular/core";

@Component({
    selector: "prj-child",
    templateUrl: "./projection-child.component.html",
    styleUrls: ["./projection-child.component.scss"]
})
export class ProjectionChild implements OnInit {
    @ContentChild("contentdata") contentdata!: ElementRef;
    maintext!:string;
    ngOnInit(): void {
        
    }

    ngAfterContentInit(){
         this.maintext=this.contentdata.nativeElement.textContent;
    }
}