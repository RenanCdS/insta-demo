import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';
import { FeedPageComponent } from './feed/pages/feed-page/feed-page.component';

const routes: Routes = [
  { path: '', component: FeedPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
