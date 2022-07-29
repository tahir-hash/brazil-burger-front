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
  private urlmenu:string = "https://tahirbrazilburger.herokuapp.com/api/menus";
  private urlburger:string = "https://tahirbrazilburger.herokuapp.com/api/burgers";

  constructor(private http:HttpClient) { }
  
  all$= (): Observable<Catalogue> =>{
    return this.http.get<Catalogue>(this.url).pipe(
      map(data=>{
        data.getAll=[...data.burgers,...data.menus]
        return data;
      })
    )
  }

  one$=(id:any,type:any)=>{
    if(type=="burger")
    {
      return this.http.get(`${this.urlburger}/${id}`);
    }
    return this.http.get(`${this.urlmenu}/${id}`);

  }
}
