import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'register-form',
    loadChildren: () => import('./pages/register-form/register-form.module').then(m => m.FormCadastroPageModule)
  },
  {
    path: 'pessoa',
    loadChildren: () => import('./pages/lista-pessoa/lista-pessoa.module').then(m => m.ListaPessoaPageModule)
  },
  {
    path: 'scheduling',
    loadChildren: () => import('./pages/scheduling/scheduling.module').then(m => m.schedulingPageModule)
  },
  {
    path: 'lista-localidades',
    loadChildren: () => import('./pages/lista-localidades/lista-localidades.module').then(m => m.ListaLocalidadesPageModule)
  },
  {
    path: 'cep',
    loadChildren: () => import('./pages/cep/cep.module').then( m => m.CepPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
