import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
