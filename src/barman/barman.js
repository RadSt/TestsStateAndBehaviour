"use strict";

export class Barman {

    ordersCount = 0;
    client;

    constructor(client){
        this.client = client;
    }

    pour(askedVolume){
        this.ordersCount++;

        if(this.client.isDrunken(askedVolume)){
            return 0;
        }

        if(this.ordersCount > 4){
            throw new Error('We dont give more 4 glasses');
            return 0;
        }

        if(!this.client.isAdultClient()){
            return 0;
        }

        return askedVolume;
    }

}