import { Component, OnInit, Input } from '@angular/core';
import { ConEntityOrProEntity } from '../../../models/models.interface';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() reviewType: string;
  @Input() reviewSuggestion: string;
  @Input() review: Array<ConEntityOrProEntity>; 


}
