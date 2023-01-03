<script setup>
import Navbar from './components/Navbar.vue'
import Bottom from './components/Bottom.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
// import Portfolio from './components/Portfolio.vue'
// import Investment from './components/Investment.vue'

</script>
<template>
  <Navbar />
  <main class="my-0 mx-auto" :style="{marginTop:-headerheight+'px'}">
    <component :is="currentView" />
  </main>
  <Bottom />
</template>

<script>
const routes = {
  '/': Home,
  '/portfolio': Home,
  '/investment': Home,
  '/contact': Contact
}
export default {
  created() {
    window.addEventListener('resize', this.adaptiveSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.adaptiveSize);
  },
  mounted() {
    this.adaptiveSize(null);
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash;
      console.log(this.currentPath);
		}, false)
  },
  data() {
    return {
      headerheight: 0,
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound;
    }
  },
  methods: {
    adaptiveSize(e) {
      const adaptiveBg = document.querySelector('.adaptive-bg-root');
      this.adaptiveBgHeight = adaptiveBg.getBoundingClientRect().height;
      const header = document.querySelector('header');
      this.headerheight=header.getBoundingClientRect().height;
    }
  }
}
</script>
