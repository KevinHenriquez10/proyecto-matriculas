import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get(key:string){

    try {

      console.log(JSON.parse(localStorage.getItem(key) || '[]'))

      return  JSON.parse(localStorage.getItem(key) || '[]');

    } catch (e) {

      console.log(e)

    }

  }

  crearTabla(){
    let usuario = this.get("usuario");
    let i=0;
    for (const e of usuario) {
      $("#crearTabla").append("<tr class='fila' value='"+i+"'><th scope='row'>"+(i+1)+"</th><td scope='col'>"+e[0]+"</td><td scope='col'>"+e[1]+"</td><td scope='col'>"+e[2]+"</td><td scope='col'>"+e[3]+"</td><td scope='col'>"+e[4]+"</td><td scope='col'>"+e[5]+"</td></td></tr>");
      i++;
    }
  }

  tomarValoresFila(){

  }
  $function(){
    $('#crearTabla tr').on('click', function(){
      var dato = $(this).find('td:first').html();
      $('#txtNombre').val(dato);
      alert(dato);
    });
  }
  actualizarRegistro(){
    
    let usuarios = this.get("usuario");
    let registro = document.getElementsByClassName("fila")
    for (let index = 0; index < registro.length; index++) {
      let campos = registro[index].getElementsByTagName("td");
    for (let i = 0; i < campos.length; i++) {
      alert(campos[i].textContent)
    }
    }
      

  }

  eliminarRegistro(){

  }

}
