<script setup>
</script>
<template>
  <a :href="links" class="hover:bg-transparent active:bg-transparent focus:bg-transparent"
    :class="{
      'underline': showunderline, 'underline-offset-8': showunderline,
      'no-underline': !showunderline, 
      'hover:color-transparent': hoverunderline, 
      'hover:underline': hoverunderline, 'hover:underline-offset-8': hoverunderline,
      'active:color-transparent': hoverunderline,  
      'active:underline': hoverunderline, 'active:underline-offset-8': hoverunderline,
      'focus:color-transparent': hoverunderline, 
      'focus:underline':hoverunderline, 'focus:underline-offset-8':hoverunderline}">
    <span :class="{ 'border': showborder, 'px-8': showborder }">{{ title }}</span>
  </a>
</template>

<script>
export default {
  props: {
    title: String,
    links: String,
    showunderline: {
      type: Boolean,
      default: false
    },
    hoverunderline: {
      type: Boolean,
      default: false
    },
    showborder: {
      type: Boolean,
      default: false
    }
  }
};
</script>