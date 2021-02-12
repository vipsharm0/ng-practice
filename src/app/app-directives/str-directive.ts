import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:"[Structdir]"
})
export class StructDir{ 
    @Input() Structdir!:boolean;
    constructor(private tempref:TemplateRef<any>, 
        private viewcontref:ViewContainerRef
        ){};

    ngOnChanges(){
        if(this.Structdir){
            this.viewcontref.createEmbeddedView(this.tempref)
        }else{
            this.viewcontref.clear();
        }
            
       
    }
}