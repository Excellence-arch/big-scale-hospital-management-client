import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidateAccountComponent } from './validate-account/validate-account.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardGuard } from './guards/dashboard.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path:"verify", component: ValidateAccountComponent },
  { path: "register", component: RegisterComponent },
  { path: "hospital", component: SideNavComponent, children: [
    { path: "dashboard", component: DashboardComponent },
    { path: "schedule", component: ScheduleComponent },
    { path: "history", component: HistoryComponent },
    { path: "profile", component: ProfileComponent },
    { path: "chat", component: ChatComponent }
  ], canActivateChild: [DashboardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
