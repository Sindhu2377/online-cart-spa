import { Component, OnInit, Input } from '@angular/core';
import { CatalogEntryViewEntity } from '../../models/models.interface';

@Component({
  selector: 'item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss']
})
export class ItemCarouselComponent {
  @Input() catalogEntryView: CatalogEntryViewEntity;
}
