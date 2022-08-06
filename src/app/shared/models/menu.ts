import { BoissonTaille } from "./boisson-taille"

export interface Menu {
    id:number
    commandeMenuBoissonTailles: BoissonTaille[]
}
