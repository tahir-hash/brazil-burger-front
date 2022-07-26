import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url:string = "http://localhost:3000/catalogue";
  constructor(private http:HttpClient) { }
  
  all$= (): Observable<Produit[]> =>{
    return this.http.get<Produit[]>(this.url)
  }
 
}
