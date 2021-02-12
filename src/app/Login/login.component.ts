import { Component,NgZone } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServLogin } from "../services/login.service";

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.scss']
})
export class LoginComponent{
    username:string = ""
    password:string = ""
    constructor(private loginServ:ServLogin, private router:Router){      
      
    }

    foo(val:any){
        console.log(val)
    }
    loginSubmit(frm:NgForm){  
            
         this.loginServ.getCredentials().subscribe( data => {
             console.log(data)
             if((frm.value.username.toUpperCase() == data.username.toUpperCase()) && 
             (frm.value.password.toUpperCase() == data.password.toUpperCase())){
                    this.router.navigate(['Home/DebtorList'] );
             }
         });
    }
}