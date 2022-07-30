import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boisson } from '../../shared/models/Boisson';
import { Produit } from '../../shared/models/produit';
import { SubMenu } from '../../shared/models/SubMenu';
import { Taille } from '../../shared/models/Taille';
import { ProduitService } from '../../shared/services/produit.service';

@Component({
  selector: 'mtm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  produit : Produit |undefined=undefined;
  composition:SubMenu|null=null;
  frites:SubMenu|null=null;
  tailles:Taille|null=null;

  
  constructor(private service: ProduitService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    /* this.service.all$().subscribe(data=>{
      this.catalogue=data.getAll;
   }) */
    let id = this.route.snapshot.paramMap.get('id');

   this.service.one$(id).subscribe(data=>{
    console.log(data);
    this.produit=data
   })
  }
  activeTab:string = 'search';

  search(activeTab:string){
    this.activeTab = activeTab;
  }

  result(activeTab:string){
    this.activeTab = activeTab;
  }
}
