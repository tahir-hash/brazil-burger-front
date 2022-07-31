import { Produit } from "./produit"

export interface Boisson
{
  libelle?: string
  prix?: number
  stock?:number
  boisson:Produit
}