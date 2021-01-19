import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {CollectionComponent} from "./modules/collection/collection.component";
import {LoginComponent} from "./modules/login/login.component";
import {CollectionUpdateComponent} from "./modules/collection/collection-update/collection-update.component";
import {AuthGuard} from "./modules/shared/services/auth-guard.guard";


const routes: Routes = [
  { path: 'collection', component: CollectionComponent },
  { path: 'collection/:id', component: CollectionUpdateComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
