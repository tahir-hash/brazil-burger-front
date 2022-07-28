import { Component, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';
import { ProduitService } from '../../shared/services/produit.service';

@Component({
  selector: 'mtm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  tahir : Produit |undefined=undefined;
  constructor(private service: ProduitService) { }

  ngOnInit(): void {
    /* this.service.all$().subscribe(data=>{
      this.catalogue=data.getAll;
   }) */
   this.service.one$().subscribe(data=>{
    //console.log(data);
    this.tahir=data
   })
  }

}
