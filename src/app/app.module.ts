import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserBioPanelComponent } from './user-bio-panel/user-bio-panel.component';
import { UserLinkPanelComponent } from './user-link-panel/user-link-panel.component';
import { UserBadgePanelComponent } from './user-badge-panel/user-badge-panel.component';
import { QuestRewardsPanelComponent } from './quest-rewards-panel/quest-rewards-panel.component';
import { QuestBadgesPanelComponent } from './quest-badges-panel/quest-badges-panel.component';
import { QuestRewardsPageComponent } from './quest-rewards-page/quest-rewards-page.component';
import { EventSchedulePageComponent } from './event-schedule-page/event-schedule-page.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { UserBioHeaderPanelComponent } from './user-bio-header-panel/user-bio-header-panel.component';
import { UserBioAboutPanelComponent } from './user-bio-about-panel/user-bio-about-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    UserBioPanelComponent,
    UserLinkPanelComponent,
    UserBadgePanelComponent,
    QuestRewardsPanelComponent,
    QuestBadgesPanelComponent,
    QuestRewardsPageComponent,
    EventSchedulePageComponent,
    ThemeSwitcherComponent,
    UserBioHeaderPanelComponent,
    UserBioAboutPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
