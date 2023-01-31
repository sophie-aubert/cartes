"use strict";

// On importe la classe Deck de Deck.js (comme demandé)
import {Deck} from "./Deck.js"
import {Card} from "./Card.js"

// On exporte cette constante dans Deck.js
export const options = {
    values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
    suits: ["Hearts", "Diamonds", "Spades", "Clubs"]
}


// ICI ON CREE : 
// UN DECK (=monDeck)
// PUIS ON APPELLE : 
// - LA METHODE DE CREATION DU DECK
// - LA METHODE D'AFFICHEAGE

//const monDeck = new Deck(options)
//monDeck.createFullDeck(),
//monDeck.shuffle()
//monDeck.displayCards()

// ON PEUT AUSSI FAIRE 
const monDeck = new Deck(options).createFullDeck().shuffle().displayCards()

// console.log(monDeck)

