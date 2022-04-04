import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { ProfileComponent } from './views/profile/profile.component'
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
import { AceptarComentariosComponent } from './views/aceptar-comentarios/aceptar-comentarios.component';
import { RecuperarCuentaComponent } from './views/recuperar-cuenta/recuperar-cuenta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Perfil'
        }
      },
      {
        path: 'mi-material',
        component: MiMaterialComponent,
        data: {
          title: 'Mi material'
        }
      },
      {
        path: 'material',
        component: MaterialDisponibleComponent,
        data: {
          title: 'Material Disponible'
        }
      },
      {
        path: 'inicio',
        component: InicioComponent,
        data: {
          title: 'Inicio'
        }
      },
      {
        path: 'tutoriales',
        component: TutorialesComponent,
        data: {
          title: 'Tutoriales'
        }
      },
      {
        path: 'reportes',
        component: ReportesComponent,
        data: {
          title: 'Reportes'
        }
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: {
          title: 'Usuarios'
        }
      },
      {
        path: 'bitacora',
        component: BitacoraComponent,
        data: {
          title: 'Bitacora'
        }
      },
      {
        path: 'blogs',
        component: BlogsComponent,
        data: {
          title: 'Blogs'
        }
      },
      {
        path: 'crear-blog',
        component: CrearBlogComponent,
        data: {
          title: 'Crear Blog'
        }
      },
      {
        path: 'registra-usuarios',
        component: RegistrarUsuariosComponent,
        data: {
          title: 'Registrar Usuarios'
        }
      },
      {
        path: 'aceptar-comentarios',
        component: AceptarComentariosComponent,
        data: {
          title: 'Aceptar Comentarios'
        }
      }
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'recuperar-cuenta',
    component: RecuperarCuentaComponent,
    data: {
      title: 'Recuperar Cuenta'
    }
  },
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
