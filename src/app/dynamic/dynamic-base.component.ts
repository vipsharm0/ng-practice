import { Component, ComponentFactoryResolver, Injector, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import { DynamicMessage } from "./message/dynamic-message.component";

@Component({
    selector:'base-dynamic',
    templateUrl:'dynamic-base.component.html',
    styleUrls:['dynamic-base.component.css']
})

export class BaseDynamic {
    @ViewChild('idcontainer', {read: ViewContainerRef}) container!:ViewContainerRef;
    @ViewChild('template') embedtemplate!:TemplateRef<any>;
    compRef!:any;

    constructor(private injector: Injector,private resolver:ComponentFactoryResolver){

    }

    injectComponent(){
        const factory= this.resolver.resolveComponentFactory(DynamicMessage);
        this.compRef = this.container.createComponent(factory);
        // this.compRef = factory.create(this.injector);
        // const viewRef = this.compRef.hostView;
        // this.container.insert(viewRef)
        this.compRef.instance.name="vipin";
    }
    destroyComponent(){
        this.compRef.destroy();
    }


    injectEmbededView(){
    
        // const viewr= this.embedtemplate.createEmbeddedView({
        //     name:"embedViewfrom ts file"
        // })
        // this.container.insert(viewr)

        this.compRef =this.container.createEmbeddedView(this.embedtemplate, {
                name:"embedViewfrom ts file"
            })
    }

    
}