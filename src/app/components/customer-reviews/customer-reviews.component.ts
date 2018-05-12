import { Component, OnInit, Input } from '@angular/core';
import { CustomerReviewEntity } from '../../models/models.interface';

@Component({
  selector: 'customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent {
  @Input() customerReview: CustomerReviewEntity;

}
