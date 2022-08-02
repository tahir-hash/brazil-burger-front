import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventService {

  private childClickedEvent = new BehaviorSubject<number>(0);

  emitValue(msg: number){
     this.childClickedEvent.next(msg)
  }

  getValue(){
     return this.childClickedEvent.asObservable();
   } 

  constructor() { }
}
