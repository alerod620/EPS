import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { TableModule, ModalModule  } from '@coreui/angular';
import { ChartjsComponent, ChartjsModule } from '@coreui/angular-chartjs'

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ProfileComponent } from './views/profile/profile.component';
import { MiMaterialComponent } from './views/mi-material/mi-material.component';
import { MaterialDisponibleComponent } from './views/material-disponible/material-disponible.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { TutorialesComponent } from './views/tutoriales/tutoriales.component';
import { ReportesComponent } from './views/reportes/reportes.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { BitacoraComponent } from './views/bitacora/bitacora.component';
import { BlogsComponent } from './views/blogs/blogs.component';
import { CrearBlogComponent } from './views/crear-blog/crear-blog.component';
import { RegistrarUsuariosComponent } from './views/registrar-usuarios/registrar-usuarios.component';
import { AccordionModule } from '@coreui/angular';
import { AceptarComentariosComponent } from './views/aceptar-comentarios/aceptar-comentarios.component';
import { RecuperarCuentaComponent } from './views/recuperar-cuenta/recuperar-cuenta.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, ProfileComponent, MiMaterialComponent, MaterialDisponibleComponent, InicioComponent, TutorialesComponent, ReportesComponent, UsuariosComponent, BitacoraComponent, BlogsComponent, CrearBlogComponent, RegistrarUsuariosComponent, AceptarComentariosComponent, RecuperarCuentaComponent],
  imports: [
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    TableModule,
    ModalModule,
    ChartjsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
