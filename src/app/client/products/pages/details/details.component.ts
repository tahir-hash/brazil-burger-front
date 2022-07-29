import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menuburgers } from '../../shared/models/menuburgers';
import { Produit } from '../../shared/models/produit';
import { ProduitService } from '../../shared/services/produit.service';

@Component({
  selector: 'mtm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  tahir : Produit |undefined=undefined;
  composition:Menuburgers|null=null;
  
  constructor(private service: ProduitService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    /* this.service.all$().subscribe(data=>{
      this.catalogue=data.getAll;
   }) */
    let id = this.route.snapshot.paramMap.get('id');
    var type = this.route.snapshot.paramMap.get('type');

   this.service.one$(id,type).subscribe(data=>{
    //console.log(data);
    this.tahir=data
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
