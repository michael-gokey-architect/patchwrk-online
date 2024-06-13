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
    QuestRewardsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
