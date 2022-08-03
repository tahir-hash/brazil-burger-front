import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Boisson } from '../../shared/models/Boisson';

@Component({
  selector: 'mtm-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {
  @Input() boisson:Boisson | undefined = undefined;
  @Input() juice: any |undefined = undefined;
  @Output() juiceChanged: EventEmitter<any> = new EventEmitter();
  qte=0
  constructor() { }

  ngOnInit(): void {
  }
  
  /* onCount(event:any)
  {
    console.log(event);
  } */
  valid(event:any)
  {
    this.juiceChanged.emit(event);
  }
 
}
