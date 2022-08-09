import { BoissonTaille } from "./boisson-taille"

export interface Menu {
    id: number
    type?: string;
    image?: Blob;
    nom?: string;
    prix?: number;
    description?: string;
    commandeMenuBoissonTailles: BoissonTaille[]
}
