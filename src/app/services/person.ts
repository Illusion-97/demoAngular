import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: Person[] = [
    {
      nom: "Connu",
      prenom: "Nain"
    },
    {
      nom: "Connu",
      prenom: "Alain"
    },
    {
      nom: "Parfait",
      prenom: "Nain"
    },
    {
      nom: "",
      prenom: "Nain"
    },
  ]
}

export interface Person {
  nom: string;
  prenom: string;
}
