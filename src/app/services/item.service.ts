import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CatalogEntryViewEntity } from '../models/models.interface';

@Injectable()
export class ItemService {

  constructor(private http: Http) { }

  loadItemData(): Observable<CatalogEntryViewEntity> {
    return this.http.get('../../../assets/item-data.json').map((res: any) => res.json());
  }

}
