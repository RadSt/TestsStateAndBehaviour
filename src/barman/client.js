"use strict";

export class Client {
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

    isDrunken(volume) {
        return volume > 150;
    }

    isAdultClient(){
        return this.age > 18;
    }

    getOrdersCount(){
        return this.ordersCount();
    }

    sober(){
        this.totalyDrunked = 0;
        this.ordersCount = 0;
    }
}