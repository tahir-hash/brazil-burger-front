import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../../shared/models/produit';
import { ProduitService } from '../../shared/services/produit.service';

@Component({
  selector: 'mtm-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  produits$ : Observable<Produit[]> | null = null;
  constructor(private service:ProduitService) { }

  ngOnInit(): void {
    this.produits$ = this.service.all$();
  }

  onfilterProduct(type:string)
  {
    
  }
}
