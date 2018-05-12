import { Component } from '@angular/core';
import { CatalogEntryViewEntity, ItemData } from './models/models.interface';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public catalogEntryView: CatalogEntryViewEntity = null;

  constructor(private itemService: ItemService) { }
  ngOnInit() {
    // get the item data
    this.itemService.loadItemData().subscribe(resp => {
       this.catalogEntryView = (resp as ItemData).CatalogEntryView[0];
    });
  }
}
