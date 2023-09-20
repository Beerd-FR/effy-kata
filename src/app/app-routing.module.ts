import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffyComponent } from './effy/effy.component';

const routes: Routes = [
  { path: '', redirectTo: '/effy', pathMatch: 'full' },
  { path: 'effy', component: EffyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
