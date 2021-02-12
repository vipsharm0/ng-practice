import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:"[prefix-stuff]"
})
export class DirectivePrefix implements OnInit{
    @HostBinding("style.color") textcolor!:string;
    @Input() flag1!:string
    @Input() flag2!:string
    @Input() flag3!:string

    constructor(private hostele:ElementRef, private renderer:Renderer2){
    }
    ngOnInit(): void {
        // via element ref
        let elem = this.hostele.nativeElement as HTMLElement;
            elem.setAttribute("style", "color:red");
            
            //via renderor
            this.renderer.setStyle(this.hostele.nativeElement, "background-color", "yellow");
    }

    @HostListener('click') onhostClick(){
            this.renderer.setStyle(this.hostele.nativeElement, "background-color", "grey")
    }

    
}