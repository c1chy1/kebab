import { defineStore } from 'pinia';



export const ProductStore = defineStore({
    id: 'product',
    state: () => ({
     hamburgers: reactive([

         {
             img: 'images/menu-slides/menu_1.png',
             title: 'Hamburger1',
             price: '9€'

         },
         {
             img: 'images/menu-slides/menu_2.png',
             title: 'Hamburger2',
             price: '12€'
         },
         {
             img: 'images/menu-slides/menu_3.png',
             title: 'Hamburger3',
             price: '10€'
         },
         {
             img: 'images/menu-slides/menu_4.png',
             title: 'Hamburger4',
             price: '13€'
         },
         {
             img: 'images/menu-slides/menu_2.png',
             title: 'Hamburger5',
             price: '15€'
         },
         {
             img: 'images/menu-slides/menu_3.png',
             title: 'Hamburger6',
             price: '12€'
         }


     ]),

    }),
    actions: {

    },
    getters: {},

});