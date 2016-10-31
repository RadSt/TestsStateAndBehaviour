"use strict";

import { Client } from './client.js'


export default class OrderPizza {

    client = new Client();

    constructor(client){
        this.client = client;
    }

    orderingAvailable(orderType) {
        if (orderType === "phone")
            return true;
        if (orderType === "site")
            return true;

        return false;
    }

    orderingAvailableCurrency(currency) {
        if (currency === "bonusPoints")
            return true;
        if (currency === "roubles")
            return true;

        return false;
    }

    orderPizza(pizzaName) {
        if (this.client.isBirthday) {
            return "SweetPizza";
        }

        return pizzaName;
    }
}