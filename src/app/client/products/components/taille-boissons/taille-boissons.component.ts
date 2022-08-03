import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Boisson } from '../../shared/models/Boisson';
import { MenuTaille } from '../../shared/models/MenuTaille';
import { Taille } from '../../shared/models/Taille';

@Component({
  selector: 'mtm-taille-boissons',
  templateUrl: './taille-boissons.component.html',
  styleUrls: ['./taille-boissons.component.css']
})
export class TailleBoissonsComponent implements OnInit {
  @Input() tailles:MenuTaille | undefined = undefined;
  @Input() otherTaille:Taille | undefined = undefined;
  @Input() btnQte:number = 1;
  
  qte=0
  constructor() { }

  ngOnInit(): void {
    if(this.tailles?.quantite!=undefined)
    {
      this.qte= this.tailles?.quantite * this.btnQte;
    }
  }
  quantity:number = 0;

  validQte(event:any,taille:any, quantite:any) {
    alert(quantite)
  }


}
