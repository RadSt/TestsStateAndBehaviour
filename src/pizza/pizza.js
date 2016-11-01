"use strict";

export class Pizza {
    getPizza (type){
        switch (type){
            case type == "margarita":
                return "margarita";
            case type == "pizzaWithFish":
                return "pizzaWithFish";
            case type == "pizzaWithVegetables":
                return "pizzaWithVegetables";
            default:
                "no such kind of pizza";
        }
    }

}