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
          this.getContactsFromDBase();
     }

     //Обращаемся в бд за списком контактов
     getContactsFromDBase(){
     }

     sendMessage(partners){

          if(Array.isArray(partners))
               partners = partners.map( x => x.isInContactList());

             this.sendMessageByApi(partners);
     }

     // Обращение к в внешнему api по отправке сообщения
     sendMessageByApi(partners){

     };
}