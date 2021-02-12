import { Component, ElementRef, ViewChild } from "@angular/core";
import { elementAt } from "rxjs/operators";


@Component({
    selector: "local-ref-base",
    templateUrl: './localref-base.component.html',
    styleUrls: ["./localref-base.component.scss"]
})
export class LocalRef {
    inputText!:string;
    tempText!:string;
    @ViewChild("temp") temp!:ElementRef;
    constructor() {
    }

    getTempRef(ele:any){
        this.inputText = ele.value;
        this.tempText = this.temp.nativeElement.value;
    }
}