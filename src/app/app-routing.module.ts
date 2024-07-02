import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { QuestRewardsPageComponent } from './quest-rewards-page/quest-rewards-page.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';


const routes: Routes = [
  { path: 'redeem-rewards', component: QuestRewardsPageComponent },
  { path: 'theme-switcher', component: ThemeSwitcherComponent },
    // { path: 'guest', component: GuestProfileComponent },
    // { path: 'page-not-found', component: PageNotFoundComponent },
    // { path: '',  redirectTo: 'guest', pathMatch: 'full'},
    // { path: "**", redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }