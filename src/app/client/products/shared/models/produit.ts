import { Menuburgers } from "./menuburgers";

export interface Produit {
  id?: number;
  type?: string;
  image?: Blob;
  nom?: string;
  prix?: number;
  description?: string;
  menuBurgers?:Menuburgers[]
  menuTailles?:[]
  menuPortionFrites?:[]
}

