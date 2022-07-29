import { Component, Input, OnInit } from '@angular/core';
import { Menuburgers } from '../../shared/models/menuburgers';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'mtm-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.css']
})
export class CompositionComponent implements OnInit {
  @Input() composition:Menuburgers | undefined = undefined;
  @Input() frites:Menuburgers | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
