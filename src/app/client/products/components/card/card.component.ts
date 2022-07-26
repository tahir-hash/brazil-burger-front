import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'mtm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('produits') produits : Produit|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
