import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './root/login/login.component';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './root/principal/principal.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'root',
      loadChildren: () => import('./root/root.module')
        .then(m => m.RootModule)
    },
    {
      path: '',
      redirectTo: 'root',
      pathMatch: 'full',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule { }
