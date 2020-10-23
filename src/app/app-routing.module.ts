import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MutationComponent } from './components/mutation/mutation.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: '/mutation', pathMatch: 'full'},
	{ path: 'mutation', component: MutationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }