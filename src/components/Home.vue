<template>
    <Custom-Carousel :items="images"></Custom-Carousel>
</template>
<script>
import CustomCarousel from './custom/carousel.vue'
export default {
  data () {
    return {
      images: []
    }
  },
  components: {
    CustomCarousel
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/photos/').then(function (data) {
      this.images = data.body.slice(0, 40)
    })
  }
}
</script>
