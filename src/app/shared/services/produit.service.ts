import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Catalogue } from '../models/catalogue';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url:string = "https://tahirbrazilburger.herokuapp.com/api/catalogues";
  private urlDetails:string = "https://tahirbrazilburger.herokuapp.com/api/details_produits";

  constructor(private http:HttpClient) { }
  
  all$= (): Observable<Catalogue> =>{
    return this.http.get<any>(this.url).pipe(
      map(data=>{
        let catalogue: Catalogue={
          burgers: data['hydra:member'][0]['burgers'],
          menus: data['hydra:member'][1]['menus'],
        }
        data.getAll=[...catalogue.burgers,...catalogue.menus]
        return data;
      })
    )
  }

  one$=(id:any)=>{
    return this.http.get(`${this.urlDetails}/${id}`)
  }
}
