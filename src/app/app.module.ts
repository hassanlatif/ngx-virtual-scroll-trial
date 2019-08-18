import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { GalleryImgComponent } from './virtual-scroll/gallery-img/gallery-img.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    GalleryImgComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
