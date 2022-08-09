import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtm-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.css']
})
export class MesCommandesComponent implements OnInit {

  enCours = "EN COURS"
  valide = "VALIDEE"
  annule = "ANNULEE"

  constructor() { }

  ngOnInit(): void {
  }

}
