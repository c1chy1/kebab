
<template>
<footer
    id="contact"
    class="bg-[url('/images/contact/footer-bg.png')]
    footer bg-cover bg-no-repeat bg-center w-full  flex flex-col
  opacity-95  pl-4  pr-6 lg:pl-12 lg:pr-20
"
>
<nav class="footer flex flex-col lg:flex-row items-end lg:items-center">

<div class="lg:w-1/2 pt-20 ">
  <AtomsLogo color="White"
             label="Burger House"
             text-size="text-4xl lg:text-6xl"
             svg-size=" w-14 md:w-24"
             src="/images/contact/logo-footer.png"
            class="space-x-8"
  />
<p class="text-white text-[17px]  leading-normal pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis.</p>

</div>
<div class="lg:w-1/2 font-bebas text-2xl place-items-baseline lg:place-items-end pt-20" >
  <div class="py-3 flex items-center uppercase">
    <AtomsIconLocation/>
    <a class="ml-4 lg:ml-8 text-xl lg:text-3xl text-white hover:text-[#ffc107] transition-all duration-500 cursor-pointer"
       onclick="address.showModal()">Dammstraße, 22A, Lüdenscheid, Germany</a>
    <dialog id="address" class="modal">
      <div class="modal-box text-[#3d2514]">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-3xl">Dammstraße, 22A, Lüdenscheid, Germany</h3>
      </div>
    </dialog>
  </div>
  <div class="flex uppercase">
  <AtomsIconEmail />
<a href="mailto:info@companyname.com" class=" ml-4 lg:ml-8 text-xl lg:text-3xl text-white hover:text-[#ffc107] transition-all duration-500">info@companyname.com</a>
  </div>

</div>
</nav>

  <footer class="footer footer-center leading-6  text-white flex flex-col-reverse lg:flex-row justify-between items-end pt-32 pb-6">
    <aside>
      <p class="pt-4 lg:pt-0" >Copyright © 2024 - All right reserved by  <a href="https://c1chy.de/" target=”_blank” class="hover:text-[#ffc107] transition-all duration-500">c1chy</a></p>
    </aside>
<AtomsFooterSocial/>

  </footer>
</footer>

</template>
<script setup lang="ts">
</script>