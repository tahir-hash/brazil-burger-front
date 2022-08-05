import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boisson } from '../../../../shared/models/Boisson';
import { Produit } from '../../../../shared/models/produit';
import { SubMenu } from '../../../../shared/models/SubMenu';
import { Taille } from '../../../../shared/models/Taille';
import { ProduitService } from '../../../../shared/services/produit.service';

@Component({
  selector: 'mtm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  produit: Produit | undefined = undefined;
  composition: SubMenu | null = null;
  frites: SubMenu | null = null;
  tailles: Taille | null = null;
  message: string = '';
  message1: string = '';

  qte = 1;
  tab: any[] = []
  constructor(private service: ProduitService, public route: ActivatedRoute) { }
  ngOnInit(): void {
    /* this.serv.getValue().subscribe(info =>{
      console.log(this.quantite)
     // this.quantite=0
      this.quantite+=info
   }) */

    let id = this.route.snapshot.paramMap.get('id');

    this.service.one$(id).subscribe(data => {
      this.produit = data
    })
  }
  activeTab: string = 'search';

  search(activeTab: string) {
    this.activeTab = activeTab;
  }

  result(activeTab: string) {
    this.activeTab = activeTab;
  }

  btnQte = 1
  recupQte(event: any) {
    this.btnQte = event;
  }
  quantity = 0

  nbr(event: any) {
    this.quantity = event
  }

  recupObj(event: any) {
    var nbr = this.quantity
    if (this.tab.length == 0) {
      let object = {
        idTaille: event.idTaille,
        quantite: event.quantite,
        boisson: [
          {
            idBoisson: event.jus.idBoisson,
            nbr: nbr,
            stock: event.jus.stock,
          }
        ]
      }
      this.tab.push(object);
    }
    else {
      var isFound = false;
      this.tab.map(data => {
        if (data.idTaille == event.idTaille) {
          isFound = true;
        }
      })
      if (isFound == false) {
        let object = {
          idTaille: event.idTaille,
          quantite: event.quantite,
          boisson: [
            {
              idBoisson: event.jus.idBoisson,
              nbr: nbr
            }
          ]
        }

        this.tab.push(object);
      }
      else {
        this.tab.map(data => {
          if (data.idTaille == event.idTaille) {
            let ObjB = {
              idBoisson: event.jus.idBoisson,
              nbr: nbr,
              stock: event.jus.stock,

            }
            let tabB: any[] = data.boisson
            let FoundB = false
            tabB.map((juice, i) => {
              if (juice.idBoisson == event.jus.idBoisson) {
                FoundB = true
                data.boisson[i] = ObjB
              }
            })
            if (FoundB == false) {
              tabB.push(ObjB)
            }
          }

        })
      }
    }
    console.log()
    //----------------------------------VALIDATION-------------------------------------

    this.ShowError(this.tab)
  }
  ShowError(tab: any[]) {
    let totalNbr = 0
    tab.forEach(data => {
      let tabB: any[] = data.boisson
      tabB.forEach(boisson => {
        totalNbr += boisson.nbr
        if (data.quantite == totalNbr) {
          this.message = 'matna'

        }
        else if(boisson.nbr>boisson.stock){
          this.message='diekhna'
        }
        else if (data.quantite < totalNbr) {
          this.message = 'Dafa eupp'
        }
        else {
          this.message = ''
        }
      })
    })
  }

  //other


  nbr1(event: any) {
    this.quantity = event
  }

  recupObj1(event: any) {
    var nbr = this.quantity
    if (this.tab.length == 0) {
      let object = {
        idTaille: event.idTaille,
        boisson: [
          {
            idBoisson: event.jus.idBoisson,
            nbr: nbr,
            stock: event.jus.stock,
          }
        ]
      }
      this.tab.push(object);
    }
    else {
      var isFound = false;
      this.tab.map(data => {
        if (data.idTaille == event.idTaille) {
          isFound = true;
        }
      })
      if (isFound == false) {
        let object = {
          idTaille: event.idTaille,
          boisson: [
            {
              idBoisson: event.jus.idBoisson,
              nbr: nbr
            }
          ]
        }

        this.tab.push(object);
      }
      else {
        this.tab.map(data => {
          if (data.idTaille == event.idTaille) {
            let ObjB = {
              idBoisson: event.jus.idBoisson,
              nbr: nbr,
              stock: event.jus.stock,

            }
            let tabB: any[] = data.boisson
            let FoundB = false
            tabB.map((juice, i) => {
              if (juice.idBoisson == event.jus.idBoisson) {
                FoundB = true
                data.boisson[i] = ObjB
              }
            })
            if (FoundB == false) {
              tabB.push(ObjB)
            }
          }

        })
      }
    }
    console.log()
    //----------------------------------VALIDATION-------------------------------------

    this.ShowError1(this.tab)
  }
  ShowError1(tab: any[]) {
    let totalNbr = 0
    tab.forEach(data => {
      let tabB: any[] = data.boisson
      tabB.forEach(boisson => {
        totalNbr += boisson.nbr
        if(boisson.nbr>boisson.stock){
          this.message1='diekhna'
        }
        else {
          this.message1 = ''
        }
      })
    })
  }

}
