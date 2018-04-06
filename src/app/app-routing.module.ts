import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@app/core';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/theme/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'navigation',
    loadChildren: 'app/theme/navigation/navigation.module#NavigationModule'
  },
  {
    path: 'widget',
    loadChildren: 'app/theme/widget/widget.module#WidgetModule'
  },
  {
    path: 'basic',
    loadChildren: 'app/theme/ui-elements/basic/basic.module#BasicModule'
  },
  {
    path: 'advance',
    loadChildren: 'app/theme/ui-elements/advance/advance.module#AdvanceModule'
  },
  {
    path: 'animations',
    loadChildren: 'app/theme/ui-elements/animation/animation.module#AnimationModule'
  },
  {
    path: 'forms',
    loadChildren: 'app/theme/forms/forms.module#FormsModule'
  },
  {
    path: 'bootstrap-table',
    loadChildren: 'app/theme/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule'
  },
  {
    path: 'data-table',
    loadChildren: 'app/theme/table/data-table/data-table.module#DataTableModule'
  },
  {
    path: 'maintenance/error',
    loadChildren: 'app/theme/maintenance/error/error.module#ErrorModule'
  },
  {
    path: 'maintenance/coming-soon',
    loadChildren: 'app/theme/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
  },
  {
    path: 'user',
    loadChildren: 'app/theme/user/user.module#UserModule'
  },
  {
    path: 'task',
    loadChildren: 'app/theme/task/task.module#TaskModule'
  },
  {
    path: 'invoice',
    loadChildren: 'app/theme/extension/invoice/invoice.module#InvoiceModule'
  },
  {
    path: 'file-upload-ui',
    loadChildren: 'app/theme/extension/file-upload-ui/file-upload-ui.module#FileUploadUiModule'
  },
  {
    path: 'charts',
    loadChildren: 'app/theme/chart/chart.module#ChartModule'
  },
  {
    path: 'map',
    loadChildren: 'app/theme/map/map.module#MapModule'
  },
  {
    path: 'simple-page',
    loadChildren: 'app/theme/simple-page/simple-page.module#SimplePageModule'
  }
  ,
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
