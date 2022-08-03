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
  @Input() tailles: MenuTaille | undefined = undefined;
  @Input() otherTaille: Taille | undefined = undefined;
  @Input() btnQte: number = 1;
  @Output() objetBoissonChange: EventEmitter<any> = new EventEmitter(); 
  qte = 0
  constructor() { }

  ngOnInit(): void {

  }
  testValid:boolean=false;
  quantity: number = 0;
  size = 0
  validQte(event: any) {
    this.size = event
  }
  newVal = 0
  tab:number[]=[]
  valid(idBoisson:any, idTaille:any,quantite:number) {
     var obj={
      idBoisson:idBoisson,
      idTaille:idTaille,
      quantite:quantite
    }
    this.objetBoissonChange.emit('ya lien')


    /* if (taille == this.tailles?.taille?.libelle) {
      alert(taille)
      this.newVal=this.size;
      this.tab.push(this.newVal)
      console.log(this.tab)
      if (this.newVal > quantite) {
        console.log(this.newVal)
       // this.testValid=true;
      }

      else {
       // alert('ok')
       //this.testValid=false;
      }
    } */
  }

  message(){
    if(this.testValid==true)
    {
      return 'dafa euppp'
    }
    return ''
  }
}
