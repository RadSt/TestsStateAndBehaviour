"use strict";

export class Barman {

    client;

    constructor(client){
        this.client = client;
    }

    pour(client, askedVolume){
        if(client.isDrunken(askedVolume)){
            return 0;
        }

        if(client.getOrdersCount() > 4){
            throw new Error('We dont give more 4 glasses');
        }

        if(!client.isAdultClient()){
            return 0;
        }

        return askedVolume;

    }

}