"use strict";

export default class Order {

    client;
    pizza;
    shop;

    constructor(client, pizza, shop){
        this.client = client;
        this.pizza = pizza;
        this.shop = shop;
    }

    getDiscount(){
        this.shop.getDiscount(client, pizza);
    }


}