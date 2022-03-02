import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './mis-componentes/contactos/contactos.component';
import { HomeComponent } from './mis-componentes/home/home.component';
import { ImagenesComponent } from './mis-componentes/imagenes/imagenes.component';
import { ProyectosComponent } from './mis-componentes/proyectos/proyectos.component';
//RUTAS DE NAVEGACION
const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
 {path: 'home', component: HomeComponent},
 {path: 'contactos', component: ContactosComponent},
 {path: 'imagenes', component: ImagenesComponent},
 {path: 'proyectos', component: ProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
