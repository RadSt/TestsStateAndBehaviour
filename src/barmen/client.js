"use strict";

export class Client {
    totalyDrunked = 0;
    ordersCount = 0;
    age = 19;

    constructor(age){
        this.age = age;
    }

    drink(volume) {
        this.ordersCount++;
        this.totalyDrunked += volume;
        return volume;
    }

    isDrunken() {
        return this.totalyDrunked > 150;
    }

    isAdultClient(){
        return this.age > 18;
    }

    getOrdersCount(){
        return this.ordersCount();
    }

}