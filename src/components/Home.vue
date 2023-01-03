<script setup>
import AdaptiveBg from './UI/AdaptiveBg.vue'
import CustomButton from './UI/CustomButton.vue'
import Card from './UI/Card.vue'
</script>

<template>
  <div class="min-h-screen">
    <AdaptiveBg isVideo
      video-src="https://player.vimeo.com/video/494857354?h=4019cf6ec8&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963" />
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
              <p class="py-2 text-xl">
                We document all of the laughters and every tears so you can relive your perfect day again and again.
              </p>
            </div>
          </div>
        </div>
        <div class="hero min-h-[30%] bg-[#E5DAD5] text-[#4F3D20]">
          <div class="hero-content flex-col">
            <div class="text-center px-10">
              <h1 class="pt-10 text-5xl font-bold font-['Great_Vibes']">Your once in a lifetime moments matter the most
                to you!</h1>
              <p class="py-6 text-2xl font-['Averia_Serif_Libre']"> In 50 years, you won’t care if every detail was
                perfect, but you will want to remember the way you felt. So, let us help you capture all sights and
                sounds of your big and small moments, and you have a stress-free wedding day! </p>
            </div>
          </div>
        </div>
        <div class="hero min-h-[45%] bg-[#E5DAD5] text-[#4F3D20]">
          <div class="hero-content flex-col lg:flex-row pb-20">
            <div class="max-w-lg">
              <h1 class="text-4xl font-bold">WHO ARE YOUR VIDEOGRAPHERS</h1>
            </div>
            <div class="max-w-lg">
              <h1 class="pt-6 text-4xl font-bold">We’re Xirui+Wenbo</h1>
              <p class="py-6">Married Marriage Videographers//Storytellers//Outdoorsy//</p>
              <p><CustomButton title="LEARN MORE ABOUT US" links="#" showunderline hoverunderline /></p>
            </div>
          </div>
        </div>
        <div class="hero min-h-[75%] text-black bg-white/50">
          <div class="hero-content pb-20">
            <div class="grid grid-flow-row gap-8">
              <h1 class="pt-10 text-5xl font-bold">OUR VIDEOS FEATURE</h1>
              <div class="grid grid-flow-row lg:grid-flow-col gap-12">
                <Card v-for="vf in videoFeatures" :key="vf.title" :imagesrc="vf.imagesrc" :links="vf.links"
                  :linkdec="vf.linkdec" :title="vf.title" :describe="vf.describe" />
              </div>
            </div>
          </div>
        </div>
        <div class="hero min-h-[30%] bg-[#E5DAD5] text-[#4F3D20]">
          <div class="hero-content flex-col">
            <div class="text-center px-10 pb-20">
              <h1 class="pt-10 text-5xl font-bold">
                What’s Next? Let’s Connect!
              </h1>
              <p class="pt-6 text-2xl font-['Averia_Serif_Libre']">
                Wedding planning can be stressful, but finding the right photographer and videographer doesn’t have to
                be.
              </p>
              <p class="text-2xl font-['Averia_Serif_Libre']">
                Our team wants to get to know you, and build a lasting friendship. We are passionate about understanding
                who you are as individuals, as a couple, and to explore the unique qualities that make your love story
                so powerful.
              </p>
              <p class="text-2xl font-['Averia_Serif_Libre']">
                We want you to have an amazing experience!
              </p>
              <p class="py-4 text-2xl font-['Averia_Serif_Libre']">
                <CustomButton class="text-2xl font-['Averia_Serif_Libre']" title="GET IN TOUCH" links="#" showunderline hoverunderline />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const videoFeatures = [
  {
    imagesrc: 'https://placeimg.com/200/280/arch',
    links: '#',
    linkdec: 'LEARN MORE',
    title: '4K Cinema Quality',
    describe: 'Your wedding film has the same quality as movies!'
  },
  {
    imagesrc: 'https://placeimg.com/200/280/arch',
    links: '#',
    linkdec: 'LEARN MORE',
    title: 'Multiple Choices',
    describe: 'Wedding highlight, short film, and documentary.'
  },
  {
    imagesrc: 'https://placeimg.com/200/280/arch',
    links: '#',
    linkdec: 'LEARN MORE',
    title: 'Customized Video',
    describe: 'Match your style of music, storytelling, and more'
  }
]
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
      adaptiveBgHeight: 0,
      videoFeatures: videoFeatures
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
