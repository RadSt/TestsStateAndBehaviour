"use strict";

import { Client } from './client.js'

export class Barman {

    client = new Client();
    constructor(client){
        this.client = client;
    }

    pour(client){
        if(client.isDrunken()){
            return 0;
        }

        if(client.getOrdersCount() > 4){
            throw new Error('We dont give more 4 glasses');
        }

        if(!client.isAdultClient()){
            return 0;
        }

    }

}