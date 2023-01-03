<script setup>
</script>

<template>
  <div class="sticky top-0 -z-50 min-w-[375px] w-full h-screen bg-[#7D7871]/30 pointer-events-none adaptive-bg-root">
    <div class='-z-50 adaptive-bg-container flex items-center justify-center w-full h-full overflow-hidden'>
      <iframe v-if="isVideo" class="-z-50 adaptive-bg aspect-video max-w-none" :class="{ 'w-full': isWFull, 'h-full': isHFull }"
        :src="videoSrc"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
        title="Acts of Adventure | Elopement Videographers" data-ready="true"></iframe>
      <img v-else class="-z-50 adaptive-bg aspect-video max-w-none" :class="{ 'w-full': isWFull, 'h-full': isHFull }"
      :src="require('../../assets/'+imageSrc)" />
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isVideo: {
      type: Boolean,
      default: false
    },
    videoSrc: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: String,
      default: ''
    }
  },
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
      isWFull: false,
      isHFull: false,
    }
  },
  methods: {
    adaptiveSize(e) {
      const bg = document.querySelector('.adaptive-bg');
      const bgRatio = bg.getBoundingClientRect().width / bg.getBoundingClientRect().height;
      const containerRatio = window.innerWidth /  window.innerHeight;;
      console.log(bgRatio, containerRatio);
      if (bgRatio > containerRatio) {
        this.isWFull = false;
        this.isHFull = true;
      } else {
        this.isWFull = true;
        this.isHFull = false;
      }
    }
  }
}
</script>