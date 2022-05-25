import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministradorComponent } from './paginas/administrador/administrador.component';
import { IndexComponent } from './paginas/index/index.component';

////////////////////////////////////////////////
const routes: Routes = [

  { path: 'index', component: IndexComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdministradorComponent},
  { path: '', component: IndexComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
