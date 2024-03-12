
<template>
  <section id="menu" class="pt-28   lg:pt-40  text-center uppercase flex flex-col">
    <h5 class="text-[22px] text-secondary w-56 mb-7 mx-auto font-bebas font-medium bg-neutral inline-block py-4 px-6">Always Tasty
      Burger</h5>
    <h2 class="section-title ">Choose &amp; Enjoy</h2>
    <p class=" text-sm xl:text-[17px] px-7 text-center font-light lowercase">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      <br class="hidden xl:block">
      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
    </p>
    <div class="flex w-full">
      <swiper
          class="swiper w-full"
          :slides-per-view="3"
          :loop="true"
          :speed="1000"
          :modules="[SwiperEffectCreative]"
          :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
          :breakpoints="{
      '0': {
        slidesPerView: 1,
        spaceBetween: 20
      },
      '640': {
        slidesPerView: 2,
        spaceBetween: 40
      },
      '1024': {
        slidesPerView: 2

      },

          '1536': {
        slidesPerView: 3

      }
    }"
      >
        <SwiperSlide v-for="(slide,index) in product.hamburgers" :key="slide"

                     class="hero pt-4 md:px-12"
        >
          <div v-if="slide"
               :class="'card-'+ slide.title"
               class="card transition-all mx-auto  h-full w-10/12"
               ref="box"
          >


            <figure  class="px-4 py-4 lg:px-10 2xl:py-10 h-full">

             <AtomsMenuImage


              :src="slide.img"
             />


            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-[38px] text-primary  xl:mb-2.5 font-bebas  font-medium uppercase ">
                {{slide.title}}</h2>
              <p class="text-sm xl:text-[17px]  leading-snug  xl:leading-tight font-light lowercase contents">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do</p>

              <h2 class="card-title text-[38px] text-primary   font-bebas  font-medium uppercase ">
                {{slide.price}}</h2>
              <div class="card-actions">
                <button
                    @click="f(slide, $event)"
                    class="btn button-orange">Buy Now</button>
              </div>
            </div>

          </div>
          <div
              class="box left-1/2 bottom-1/2 absolute z-[1000]">
          </div>

        </SwiperSlide>


      </swiper>




    </div>
  </section>


  <div

      id="cartbox"
      class=" select-none fixed container bg-red  top-5 left-5 w-10 h-16 bg-cover z-[1000]"
      ref="container"
  >

  </div>

</template>

<script setup lang="ts">
import {useCartStore} from "~/store/cartStore";
import {ProductStore} from "~/store/productStore";


const product = ProductStore()

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();


onMounted(()=> {
/*
  nextTick(()=> {

    var rect = refs.box.getBoundingClientRect().height;

  })*/

})

console.log(product)

let box = ref()
const container = ref([])

const test =[]

const reducedMotion = ref()
if(process.client) {

  reducedMotion.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

}
const setInCartClass = (item, inCart) => item.parentNode.classList.toggle('in-cart', inCart);
const setActiveItemClass = (item, isActive) => item.parentNode.classList.toggle('active', isActive);
console.log()

function f(item , evt) {



  let state = Flip.getState(`card-${item.title}`, { simple: true });
  let containerFlip = Flip.getState('.cart', { simple: true });
  console.log(evt)

/*  let state = Flip.getState(last);*/

  Flip.from(state, {
    duration: 1,
    ease: "power1.out",
    x: evt.target.offsetLeft,
    y: evt.target.offsetTop,
    transition : 'all 3s',
    position: '',



  });

  nextTick(()=>{
    gsap.from(state, {
      opacity: 1,
      x: evt.target.offsetLeft,
      y: evt.target.offsetTop,
      duration: 0.5,
      ease: "power1.out"
    })
    setTimeout(()=>{
      container.value.push(item);
    }, 500)
  })
/*
  Flip.from(state, { duration: 1, ease: "power1.out" , left:'50px', marginLeft: '50px' })
*/


/*  container.value.appendChild(last);*/
/*
  Flip.from(state, { duration: 1, ease: "power1.out" });
*/
}

</script>


<style scoped>
* {
  box-sizing: border-box;
}

body {
  --color-primary: hotpink;
  --color-secondary: white;
  --color-tertiary: dodgerblue;
  --padding: clamp(1rem, 2vw, 2rem);
  --radius: 0.25rem;
  --shadow: 0 1rem 2rem hsla(0 0% 0% / 0.2);

  margin: 0;
  font-family: monospace, monospace;
}


/* ITEMS */

.items:not(:empty) {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--padding);
  padding: calc(var(--padding) * 2);
  grid-template-columns: var(--columns, 1fr);
}

@media (min-width: 350px) {
  .items {
    --columns: repeat(auto-fit, minmax(14rem, 1fr));
  }
}

.item {
  position: relative;
  display: grid;
  aspect-ratio: 1;
  border-radius: var(--radius);
}

.item.in-cart {
  color: var(--color-primary);
  border: 2px dashed currentcolor;
  z-index: 1;
}

.item.active {
  z-index: 2;
}



/* BUTTONS */

[class*="btn"] {
  all: unset;
}

[class*="btn"]:active {
  transform: translateY(2px);
}

[class*="btn"]:focus-visible {
  --size: 3px;
  outline: var(--size) solid var(--color-tertiary);
  outline-offset: var(--size);
}

.btn-item {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-size: 2rem;
  color: var(--color-secondary);
  background-color: var(--color-primary);
  border-radius: var(--radius);
}

.btn-cart {
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;
  background: var(--color-secondary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.btn-cart svg {
  width: 1.5em;
  height: 1.5em;
}




/* CART */

.cart {
  display: grid;
  place-items: end;
  position: fixed;
  bottom: var(--padding);
  right: var(--padding);
  width: 100%;
  min-width: 0;
  pointer-events: none;
  z-index: 3;
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cart:not(.open) {
  transform: translateY(calc(100% + var(--padding)));
}

.cart:not(.open) .items-wrapper {
  visibility: hidden;
  transition-delay: 300ms;
}

.cart .items-wrapper {
  display: grid;
  overflow: auto;
  width: calc(100% - var(--padding) * 2);
  max-height: 75vh;
  max-width: 350px;
  background-color: var(--color-secondary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  pointer-events: initial;
  transition: visibility 0s;
}

.cart .items {
  --columns: repeat(auto-fill, minmax(3rem, 1fr));
  --padding: 0.5rem;
}

.cart .count {
  --size: 1.75em;
  position: absolute;
  top: -0.65em;
  right: -0.75em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-secondary);
  background-color: var(--color-primary);
  font-size: 0.9rem;
  letter-spacing: -0.08em;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
}

.cart .count:empty {
  display: none;
}

.cart .items .btn-item {
  font-size: 1rem;
}

.cart .empty-text {
  grid-column: 1 / -1;
  text-align: center;
  padding: 1rem;
}

.btn-cart-wrapper {
  position: absolute;
  bottom: calc(100% + var(--padding));
  pointer-events: initial;
  z-index: 1;
}

.btn-cart-wrapper .btn-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (prefers-reduced-motion) {
  .cart {
    transition-duration: 0s;
  }

  .cart:not(.open) .items-wrapper {
    transition-delay: 0s;
  }
}
.swiper-slide-next img {

  transition: all 1s;
  transform: scale(1.15);

}

.box {
  width: 100px;
  height: 100px;

  background-color: blue;
}
.container {
  border: 1px solid #000;
  width: 200px;
  height: 200px;
  transform: rotate(-30deg);
}

</style>