import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('admin/Dashboard' as any).then((m) => m.DashboardModule )},
  { path: 'test', loadChildren: () => import('admin/Home' as any).then((m) => m.HomeModule )},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
