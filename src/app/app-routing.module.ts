import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadoComponent } from './navigation/certificado/certificado.component';
import { ContactoComponent } from './navigation/contacto/contacto.component';
import { HomeComponent } from './navigation/home/home.component';
import { ProyectosComponent } from './navigation/proyectos/proyectos.component';
import { SobreMiComponent } from './navigation/sobre-mi/sobre-mi.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'certificado', component: CertificadoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'sobreMi', component: SobreMiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
