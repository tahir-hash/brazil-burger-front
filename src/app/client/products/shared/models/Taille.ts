import { Boisson } from "./Boisson";

export interface Taille
{
  prix?: number;
  libelle?: string;
  boissonTailles?:Boisson[]
}