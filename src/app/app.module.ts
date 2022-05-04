import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { Section1Component } from './componentes/section1/section1.component';
import { Section2Component } from './componentes/section2/section2.component';
import { IndexComponent } from './paginas/index/index.component';
import { AdministradorComponent } from './paginas/administrador/administrador.component';
import { ColaboradorComponent } from './paginas/colaborador/colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    Section1Component,
    Section2Component,
    IndexComponent,
    AdministradorComponent,
    ColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
