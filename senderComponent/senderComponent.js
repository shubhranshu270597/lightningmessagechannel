import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import EXTIONCTION_MESSAGE_CHANNEL from '@salesforce/messageChannel/ExtinctionAnimalChannel__c';
export default class SenderComponent extends LightningElement {
    extinctAnimals = [
        {
            name: 'Dodo',
            country: 'Mauritius',
            extinctionSince: 'Late 17th century',
            publicImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzWZzR0VPDB9j8VGtUjvou6gqH5_j4iKeMQ&s',
            shortData: 'The dodo was a flightless bird endemic to the island of Mauritius. It became extinct in the late 17th century due to hunting and habitat destruction.'
        },
        {
            name: 'Thylacine (Tasmanian Tiger)',
            country: 'Australia',
            extinctionSince: '1936',
            publicImageUrl: 'https://i.guim.co.uk/img/media/73bfcd1612f2cc513a5eba7a52864bcf9d52ca5a/216_374_3600_2161/master/3600.jpg?width=1200&quality=85&auto=format&fit=max&s=687b6a63fc9f6d5b1d0137ec696b7ca0',
            shortData: 'The thylacine, also known as the Tasmanian tiger, was a carnivorous marsupial native to Tasmania, Australia, and New Guinea. It became extinct in 1936 due to hunting, habitat destruction, and disease.'
        },
        {
            name: 'Quagga',
            country: 'South Africa',
            extinctionSince: 'Late 19th century',
            publicImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RdJ7IuLzLmHLQI30Vm_bQEnfXRAfQiCdWw&s',
            shortData: 'The quagga was a subspecies of the plains zebra native to South Africa. It became extinct in the late 19th century due to overhunting and habitat loss.'
        },
        {
            name: 'Passenger Pigeon',
            country: 'United States',
            extinctionSince: '1914',
            publicImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogCAjc9l9PIWKFeZYdurVl5wFTCTubqVbuw&s',
            shortData: 'The passenger pigeon was once one of the most abundant birds in North America, but hunting and habitat destruction led to its extinction in 1914.'
        },
        {
            name: 'Tasmanian Emu',
            country: 'Australia',
            extinctionSince: '1865',
            publicImageUrl: 'https://i0.wp.com/storage.googleapis.com/stateless-tasmaniangeographic/2020/01/Emu-in-Lone-Pine-Koala-Sanctuary-Brisbane.-https-commons.wikimedia.orgwikiDromaius_novaehollandiae.jpg?fit=1015%2C1024&ssl=1',
            shortData: 'The Tasmanian emu was a subspecies of emu endemic to Tasmania, Australia. It became extinct in 1865 due to hunting and habitat destruction.'
        },
        {
            name: 'Great Auk',
            country: 'Various',
            extinctionSince: 'Mid-19th century',
            publicImageUrl: 'https://johnjames.audubon.org/sites/default/files/styles/hero_mobile/public/great_auk_audubon.jpg?itok=vZQfO-lA',
            shortData: 'The great auk was a flightless bird that inhabited the coasts of the North Atlantic. It became extinct in the mid-19th century due to overhunting for its feathers, eggs, and oil.'
        }
    ];

    @wire(MessageContext)
    messageContext;

    sendMessage(event) {
        console.log(`ext data => ${event.target.dataset.name} ${event.target.dataset.shortData} ${event.target.dataset.country} `)
        const message = {
            animalName: event.target.dataset.name, // Example data to send
            animalData: event.target.dataset.animaldata,
            animalCountry: event.target.dataset.country
        };
        publish(this.messageContext, EXTIONCTION_MESSAGE_CHANNEL, message);
    }
}