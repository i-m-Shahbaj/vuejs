<template>
    <div>
    <carousel :navigationEnabled="true">
        <slide v-for="(i,index) in items" :key="index">
            <img :src="i.url" height="100px" width ="100px"/>
        </slide>
    </carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default{
  name: 'CustomCarousel',
  props: ['items'],

  components: {
    Carousel,
    Slide
  }
}
</script>
