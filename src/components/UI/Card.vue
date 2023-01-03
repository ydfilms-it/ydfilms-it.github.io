<script setup>
import CustomButton from './CustomButton.vue'
</script>

<template>
  <div class="card w-72 glass !p-0 m-auto">
    <figure class="w-72 h-40"><img class="w-full" :src="imagesrc" :art="links" /></figure>
    <div class="card-body">
      <h2 class="card-title font-bold text-xl"> {{ title }} </h2>
      <p class="text-left text-sm">{{ describe }}</p>      
      <div class="card-actions justify-end text-left text-sm">
        <p><CustomButton :title="linkdec" :links="links" showunderline hoverunderline /></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagesrc: String,
    links: String,
    linkdec: String,
    title: String,
    describe: String,
  }
}

</script>