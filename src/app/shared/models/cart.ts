import { BoissonTailleCommande } from "./boisson-taille-commande";
import { BurgerCommande } from "./burger-commande";
import { MenuCommande } from "./menu-commande";
import { PortionFriteCommande } from "./portion-frite-commande";

export interface Cart {
    burgerCommandes?:BurgerCommande[]
    portionFriteCommandes?:PortionFriteCommande[]
    boissonTailleCommandes?:BoissonTailleCommande[]
    menuCommandes?:MenuCommande[]
}
