export interface Produit {
  id?: number;
  type?: string;
  image?: Blob;
  nom?: string;
  prix?: number;
  description?: string;
  menuBurgers?:[]
  menuTailles?:[]
  menuPortionFrites?:[]
}

