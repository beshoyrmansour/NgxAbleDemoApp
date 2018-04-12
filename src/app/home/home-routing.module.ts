import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract, } from '@app/core';
import { HomeComponent } from './home.component';
import { config } from '../../config/pages-config';

const routes: Routes = [
  { path: '', redirectTo: config.home.route, pathMatch: 'full' },
      {
        path: config.home.path,
        component: HomeComponent,
        data: { title: extract('Home') }
      }
//   Route.withShell([
//     { path: '', redirectTo: config.home.route, pathMatch: 'full' },
//     {
//       path: config.home.path,
//       component: HomeComponent,
//       data: { title: extract('Home') }
//     }
//   ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
