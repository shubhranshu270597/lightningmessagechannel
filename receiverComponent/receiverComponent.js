import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import EXTIONCTION_MESSAGE_CHANNEL from '@salesforce/messageChannel/ExtinctionAnimalChannel__c';

export default class ReceiverComponent extends LightningElement {
    animalData;
    animalname;
    animalCounty;

    @wire(MessageContext)
    messageContext;

    subscription;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            EXTIONCTION_MESSAGE_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }

    handleMessage(message) {
        this.animalname = message.animalName;
        this.animalData = message.animalData;
        this.animalCounty = message.animalCountry;
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
    }
}