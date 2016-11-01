"use strict";
import { Partner } from './partner';

export class Messenger {
     user;
     partner;
     partners = new Array<Partner>({});

     counstructor(user, partner){
         this.user = user;
          this.partner = partner;
          this.addPartners();
     }

     addPartners(){
          for(let i = 0; i < 5; i++){
               this.partners.push(new Partner);
          }
     }

     getContactsList(){
          //Обращаемся в бд за списком контактов возвращаем в ответ
          if(user.isLogIn()){
               return this.partners;
          }
          return null;
     }

     sendMessage(partners){
          let contactParters = partners.map( x=> x.isInContactList())
          if(contactParters.length > 0){
               chat.SendMessage(partners);
          }
     }
}