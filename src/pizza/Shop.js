"use strict";

export class Shop {
    client;
    pizza;

    constructor(client, pizzaType){
        this.client = client;
        this.pizza = pizza(pizzaType);
    }

    getDiscount(client, pizza){
        let discountVal = 0;
        if(client.isBirthdayToday){
            discountVal = 10;
        }
        if(pizza == "margarita"){
            discountVal = 5;
        }

        if(pizza == "pizzaWithFish"){
            discountVal = 10;
        }

        return discountVal;
    }

}