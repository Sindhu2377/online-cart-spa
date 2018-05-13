import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppComponent } from './app.component';
import { ItemCarouselComponent } from './components/item-carousel/item-carousel.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { ItemService } from './services/item.service';
import { ReviewComponent } from './components/customer-reviews/review/review.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ItemCarouselComponent,
    CustomerReviewsComponent,
    ItemInfoComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule { }
