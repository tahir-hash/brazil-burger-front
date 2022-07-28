import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'mtm-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.css']
})
export class CompositionComponent implements OnInit {
  @Input() composition:Produit| undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
