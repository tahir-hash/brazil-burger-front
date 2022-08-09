import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'mtm-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.css']
})
export class MesCommandesComponent implements OnInit {

  enCours = "EN COURS"
  valide = "VALIDEE"
  annule = "ANNULEE"


  constructor(private commandeServ:CommandeService) { }

  ngOnInit(): void {
   /*  this.commandeServ.getOwnCommande().subscribe(
      data=> console.log(data)
    ) */
  }

}
