<template>
    <main :posts="Posts"></main>
</template>
<script>
import main from './layout/main.vue'
export default {
  name: 'home',
  data () {
    return {
      Posts: [
        {
          user: [{
            name: 'shahbaj',
            display: '#',
            location: 'Jawahar circle',
            time: '12 pm'
          }]
        }
      ]
    }
  },
  components: {
    main
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/photos/').then(function (data) {
      this.images = data.body.slice(0, 40)
    })
  }
}
</script>
