import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MutationComponent } from './mutation/mutation.component';


const routes: Routes = [
	{ path: '', redirectTo: '/mutation', pathMatch: 'full'},
	{ path: 'mutation', component: MutationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }