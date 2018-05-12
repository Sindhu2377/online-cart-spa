import { Component, Input } from '@angular/core';
import { CatalogEntryViewEntity } from '../../models/models.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent {
  @Input() catalogEntryView: CatalogEntryViewEntity;
  constructor(private domSanitizer: DomSanitizer) { }

  getHtmlData(text: string){
    return this.domSanitizer.bypassSecurityTrustHtml(text);
  }

}
