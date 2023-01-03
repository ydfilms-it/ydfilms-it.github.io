<script setup>
import CustomButton from './UI/CustomButton.vue'
</script>

<template>
  <footer class="my-0 mx-auto footer footer-center p-10 bg-white text-black rounded">
    <div class="max-w-7xl grid grid-flow-row sm:grid-flow-col md:grid-flow-col lg:grid-flow-col gap-8 text-xl">
      <CustomButton title="WEDDING" links="#" hoverunderline />
      <CustomButton title="PORTFOLIO" links="#" hoverunderline />
      <CustomButton title="INVESTMENT" links="#" hoverunderline />
      <CustomButton title="CONTACT" links="#" hoverunderline />
    </div>
    <div class="max-w-7xl grid grid-flow-row sm:grid-flow-col md:grid-flow-col lg:grid-flow-col gap-8">
      <a><font-awesome-icon class="w-6 h-6" icon="fa-brands fa-facebook" /></a>
      <a><font-awesome-icon class="w-6 h-6" icon="fa-brands fa-instagram" /></a>
      <a><font-awesome-icon class="w-6 h-6" icon="fa-brands fa-youtube" /></a>
      <a><font-awesome-icon class="w-6 h-6" icon="fa-brands fa-bilibili" /></a>
    </div>
    <div class="max-w-7xl text-xl">
      <p>Copyright © 2023 - All right reserved by <span class="font-['Great_Vibes'] font-bold">YD Films</span></p>
    </div>
  </footer>
</template>