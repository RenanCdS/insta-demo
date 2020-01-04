import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { CoreModule } from '../core/core.module';
import { CardComponent } from './components/card/card.component';
import { CardMoreOptionsModal } from './components/card/card.component';

// Material imports
import { MatCardModule } from '@angular/material/card';
import { UserPhotoComponent } from './components/user-photo/user-photo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeedPageComponent, CardComponent, UserPhotoComponent, CardMoreOptionsModal],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    MatCardModule,
    MatDialogModule,
    FeedRoutingModule
  ],
  entryComponents: [CardMoreOptionsModal],
  exports: [
    FeedPageComponent
  ]
})
export class FeedModule { }
