import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandComponent } from './components/navbar/components/brand/brand.component';
import { InstaInputComponent } from './components/navbar/components/insta-input/insta-input.component';

/* Material imports */
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, BrandComponent, InstaInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
