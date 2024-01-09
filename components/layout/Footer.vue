
<template>
<footer
    id="contact"
    class="bg-[url('/images/contact/footer-bg.png')]
    footer bg-cover grayscale-40 bg-no-repeat bg-center w-full h-96 flex flex-col "
>
<nav class="footer flex">

<div class="w-1/2">
  <AtomsLogo color="White" label="Burger House"  src="/images/contact/logo-footer.png"/>
<p class="text-white text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis.</p>

</div>
<div class="w-1/2">
  <div class="flex uppercase">
    <AtomsIconLocation/>
    <a class="text-white hover:text-[#ffc107] transition-all duration-500 cursor-pointer" onclick="address.showModal()">Dammstraße, 22A, Lüdenscheid, Germany</a>
    <dialog id="address" class="modal">
      <div class="modal-box text-dark">
        <form method="dialog" class="text-dark">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg">Dammstraße, 22A, Lüdenscheid, Germany</h3>
      </div>
    </dialog>
  </div>
  <div class="flex uppercase">
  <AtomsIconEmail/>
<a href="mailto:info@companyname.com" class="text-white hover:text-[#ffc107] transition-all duration-500">info@companyname.com</a>
  </div>

</div>
</nav>

  <footer class="footer footer-center p-4 text-white flex justify-between">
    <aside>
      <p>Copyright © 2024 - All right reserved by c1chy</p>
    </aside>
<AtomsFooterSocial/>

  </footer>
</footer>




</template>
<script setup lang="ts">
</script>