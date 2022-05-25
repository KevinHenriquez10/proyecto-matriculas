import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myFormLogin:FormGroup

  constructor(private _builder:FormBuilder) { 
    this.myFormLogin=this._builder.group({
      inpUsuario: ['', [Validators.required]],
      inpPassword: ['', [Validators.required]]
    })
  }

  usuario:any;
  password:any;

  ngOnInit(): void {
  }

  get(key:string){

    try {

      return  JSON.parse(localStorage.getItem(key) || '{}');

    } catch (e) {

      console.log(e)

    }

  }

  login (value:any){
    this.usuario=value.inpUsuario;
    this.password=value.inpPassword;
    let user = this.get("usuario");
    let confirmacion = false;
    console.log(user.length)
    if (user.length==undefined){
      alert("Por favor cree una cuenta! 😎");
    }for (const us of user) {
      if (us[4]==this.usuario && us[5]==this.password) {
        if(us[3]=="Administrador"){
          window.location.href="/admin";
          alert("Bienvenido! 🔥");
          confirmacion = true;
        }else{
          alert("Bienvenido! 🔥");
          confirmacion = true;
          window.location.href="/";
        }
      }
    } if(user.length!=undefined && user.length!=0 && confirmacion == false) {
      alert("Usuario o Contraseña Equivocada 🤨");
    }
  }

}
