"use strict";

export class Client {
    age = 19;
    totalyDrunked = 0;

    constructor(age){
        this.age = age;
    }

    drink(volume) {
        this.totalyDrunked += volume;
        return volume;
    }

    isDrunken() {
        return this.totalyDrunked > 150;
    }

    isAdultClient(){
        return this.age > 18;
    }
}