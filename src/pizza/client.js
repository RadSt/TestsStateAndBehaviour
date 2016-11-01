"use strict";

export class Client {
    isBirthday = false;

    constructor(isBirthday){
        this.isBirthday = isBirthday;
    }

    isBirthdayToday(){
        return this.isBirthday;
    }

}