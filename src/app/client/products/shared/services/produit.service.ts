import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Catalogue } from '../models/catalogue';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url:string = "http://localhost:3000/catalogue";
  constructor(private http:HttpClient) { }
  
  all$= (): Observable<Catalogue> =>{
    return this.http.get<Catalogue>(this.url).pipe(
      map(data=>{
        data.getAll=[...data.burgers,...data.menus]
        return data;
      })
    )
  }
 
}
