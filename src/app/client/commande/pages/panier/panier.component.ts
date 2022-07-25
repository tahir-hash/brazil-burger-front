import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mtm-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  @Input('panier') panier : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
