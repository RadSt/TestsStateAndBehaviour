"use strict";

export class User {
    logIn;

    constructor(){
        this.logIn = true;
    }

    isLogIn(){
        return this.logIn;
    }
}