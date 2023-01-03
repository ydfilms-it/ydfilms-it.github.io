<script setup>
import AdaptiveBg from './UI/AdaptiveBg.vue'
</script>

<template>
  <div class="min-h-screen">
    <AdaptiveBg image-src="header_bg.png" />
    <div class="w-full left-0" :style="{ marginTop: -adaptiveBgHeight + 'px' }">
      <section class="m-0 p-0 w-full">
        <div class="hero min-h-screen bg-base-200/0 text-white">
          <div class="hero-content flex-col lg:flex-row">
            <div class="max-w-sm text-center">
              <div class="flex items-center justify-center">
                <img
                  src="https://actsofadventure.com/wp-content/uploads/2020/11/Acts-of-adventure-Final_Full-Logo-White-Mobile-2-1.png" />
              </div>
              <p class="text-xl">North Carolina Wedding</p>
              <p class="text-xl">& Elopement Videographer</p>
            </div>
            <div class="max-w-sm">
              <div class="flex items-center justify-center">
                <h1 class="pt-10 text-5xl font-bold font-['Great_Vibes']">Capture YOUR Perfect Day</h1>
              </div>
              <p class="py-2 text-xl">We document all of the laughters and every tears so you can relive your perfect day
                again and again.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {created() {
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
      adaptiveBgHeight: 0
    }
  },
  methods: {
    adaptiveSize(e) {
      const adaptiveBg = document.querySelector('.adaptive-bg-root');
      this.adaptiveBgHeight = adaptiveBg.getBoundingClientRect().height;
    }
  }
}
</script>
