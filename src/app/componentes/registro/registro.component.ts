import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myFormRegister:FormGroup

  constructor(private _builder:FormBuilder) { 

    this.myFormRegister=this._builder.group({
      inpNombre: ['', [Validators.required]]  ,
      inpApellido: ['', [Validators.required]],
      inpEmail: ['', [Validators.required]],
      inpTipo: ['', [Validators.required]],
      inpUsuario: ['', [Validators.required]],
      inpPassword: ['', [Validators.required]]
    })

  }

  inpNombre:any;
  inpApellido:any;
  inpEmail:any;
  inpTipo:any;
  inpUsuario:any;
  inpPassword:any;

  

  ngOnInit(): void {
  }

  set(key:string, data:any){
    try {
      localStorage.setItem(key ,JSON.stringify(data));
    } catch (e) {
      console.log(e)
    }
  
  }
  
  
  
  get(key:string){

    try {

      console.log(JSON.parse(localStorage.getItem(key) || '[]'))

      return  JSON.parse(localStorage.getItem(key) || '[]');

    } catch (e) {

      console.log(e)

    }

  }

  registrar(value:any){
    this.inpNombre = value.inpNombre;
    this.inpApellido = value.inpApellido;
    this.inpEmail = value.inpEmail;
    this.inpTipo = value.inpTipo;
    this.inpUsuario = value.inpUsuario;
    this.inpPassword = value.inpPassword;
    let usuario;
    let usuarioTemp =[];
    usuario = this.get("usuario");
    if(usuario.length=="[]"){
      usuario.push(this.inpNombre,this.inpApellido,this.inpEmail,this.inpTipo,this.inpUsuario,this.inpPassword);
      this.set("usuario",usuario);
      alert("Usuarios creado con Exito!");
    }else{
      usuarioTemp.push(this.inpNombre,this.inpApellido,this.inpEmail,this.inpTipo,this.inpUsuario,this.inpPassword);
      usuario.push(usuarioTemp);
      this.set("usuario",usuario);
      alert("Usuarios creado con Exito!");
    }
    if (this.inpTipo=="Administrador") {
      window.location.href="admin";
    }else{
      window.location.href="/";
    }
    
  }
  
}
