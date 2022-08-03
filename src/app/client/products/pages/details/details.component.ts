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
  qte=1;
  constructor(private service: ProduitService,public route: ActivatedRoute) { }
  ngOnInit(): void {
    /* this.serv.getValue().subscribe(info =>{
      console.log(this.quantite)
     // this.quantite=0
      this.quantite+=info
   }) */

    let id = this.route.snapshot.paramMap.get('id');

   this.service.one$(id).subscribe(data=>{
   // console.log(data);
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

  //fontSizePx=16;
  /* ok(){
    if(this.quantite>this.produit?.menu.menuTailles)
    {
      alert ('ok');
    }
  } */
  btnQte=1
  recupQte(event:any){
    this.btnQte=event;
  }

  yaLien(event:any)
  {
    alert(event);
  }
}
