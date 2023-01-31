// Création de la classe comme demandé

//Ici on importe notre const options qu'il y'a dans "app.js"
import { options } from "./app.js";
import { Card } from "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";

export class Deck {
  // A chaque nouveau Deck, on veut un tableau de cartes
  // # veut dire que c'est une constante privée.
  #cards = [];

  constructor(options) {
    this.values = options.values;
    this.suits = options.suits;
  }

  createFullDeck = () => {
    // Pour chaque valeur ...
    this.values.forEach((v) => {
        // et pour chaque suite ...
      this.suits.forEach((s) => {

        // Dans ce tableau, pousse la nouvelle carte crée
        this.#cards.push(new Card(v, s));
      });
    });
  };

  shuffle = () => {
    this.#cards = shuffle(this.#cards);
  };

  displayCards = () => {
    // Dans ce tableau, pour carte, 
    // applique la méthode display. 
    this.#cards.forEach((card) => {
    card.display()
  })
}
}
