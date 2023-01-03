<script setup>
import AdaptiveBg from './UI/AdaptiveBg.vue'
import CustomButton from './UI/CustomButton.vue'
</script>

<template>
  <header class="my-0 mx-auto p-8 max-w-7xl">
    <div class="navbar text-white">
      <div class="flex-1">
        <a herf="#"><span class="font-['Great_Vibes'] font-bold text-5xl">YD</span><span class="font-['Great_Vibes'] font-bold text-2xl text-white">Films</span></a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal rounded-none px-1 hidden lg:flex  text-2xl">
          <li><CustomButton title="WEDDING" links="#/" hoverunderline /></li>
          <li><CustomButton title="PORTFOLIO" links="#/portfolio" hoverunderline /></li>
          <li><CustomButton title="INVESTMENT" links="#/investment" hoverunderline /></li>
          <li><CustomButton title="CONTACT" links="#/contact" hoverunderline /></li>
          <li><CustomButton class="font-bold" title="MEET US" links="#/contact" showborder /></li>
        </ul>
        <!-- The button to open modal -->
        <label for="my-modal-3" tabindex="0" class="btn btn-ghost lg:hidden">
            <font-awesome-icon  class="w-12 h-12" icon="fa-solid fa-bars" />
        </label>
      </div>
    </div>
  </header>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="relative min-h-screen min-w-full rounded-none bg-black text-white">
      <label for="my-modal-3" class="absolute top-8 right-8">
        <font-awesome-icon class="w-12 h-12" icon="fa-solid fa-xmark" />
      </label>
      <h1 class="py-8"><span class="font-['Great_Vibes'] font-bold text-5xl">YD</span><span class="font-['Great_Vibes'] font-bold text-2xl">Films</span></h1>
      <ul class="menu text-2xl" >
        <li><CustomButton class="mx-auto" title="WEDDING" links="#" hoverunderline /></li>
        <li><CustomButton class="mx-auto" title="PORTFOLIO" links="#" hoverunderline /></li>
        <li><CustomButton class="mx-auto" title="INVESTMENT" links="#" hoverunderline /></li>
        <li><CustomButton class="mx-auto" title="CONTACT" links="#" hoverunderline /></li>
        <li><CustomButton class="mx-auto font-bold" title="MEET US" links="#" showborder /></li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  created() {
    window.addEventListener('resize', this.adaptiveSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.adaptiveSize);
  },
  mounted() {
    this.adaptiveSize(null);
  },
  data() {
    return {
      dropmenuwidth: 0
    }
  },
  methods: {
    adaptiveSize(e) {
      const header = document.querySelector('header');
      this.dropmenuwidth=header.getBoundingClientRect().width - 80;
    }
  }
}
</script>
