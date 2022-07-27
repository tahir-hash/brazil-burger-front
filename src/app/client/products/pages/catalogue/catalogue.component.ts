import { Component, OnInit } from '@angular/core';
import { filter, map, mergeAll, Observable, tap } from 'rxjs';
import { Produit } from '../../shared/models/produit';
import { ProduitService } from '../../shared/services/produit.service';

@Component({
  selector: 'mtm-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public result: Produit[]=[];
  produits$ : Observable<Produit[]> | null = null;
  constructor(private service:ProduitService) { }

  ngOnInit(): void {
    this.produits$ = this.service.all$()
    this.produits$.subscribe();
     /*  this.produits$.subscribe(result=>{
        this.result=result
        this.result=Object.values(this.result)
        console.log(this.result)
        return this.result
      }); */

  }

  onfilterProduct(type:string)
  {
    this.produits$ = this.service.all$().pipe(
      map(result=>{
        console.log(result)
       return result.filter(prod=>prod.type==type)
      })
    )
  }



  
}
