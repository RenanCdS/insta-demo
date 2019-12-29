import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { CoreModule } from '../core/core.module';
import { CardComponent } from './components/card/card.component';

// Material imports
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FeedPageComponent, CardComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule,
    FeedRoutingModule
  ],
  exports: [
    FeedPageComponent
  ]
})
export class FeedModule { }
