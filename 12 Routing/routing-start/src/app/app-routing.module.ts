import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {ServersComponent} from "./servers/servers.component";
import {UserComponent} from "./users/user/user.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ServerComponent} from "./servers/server/server.component";
// import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolver} from "./servers/server/server-resolver.service";



const appRoutes: Routes = [

  // default route
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children:
    [
      {path: ':id/:name', component: UserComponent},
    ]},
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children:
    [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      // {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
    ]
  },
  // {path: 'page-not-found', component: PageNotFoundComponent},
  {path: 'page-not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/page-not-found'},
];

@NgModule({
  imports: [
    // useHash uses the old method of parsing URLs
    // will display localhost:4200/#/users instead of localhost:4200/users
    // RouterModule.forRoot(appRoutes, {useHash: true}),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
