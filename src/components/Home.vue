<template>
    <div class="row">
        <div class="col-sm-4">
        </div>
        <div class="col-sm-4">
    <posts :posts="Posts"></posts>
        </div>
        <div class="col-sm-4">
        </div>
    </div>
</template>
<script type="text/babel">
import posts from './layout/main.vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  name: 'home',
  data () {
    return {
      Posts: [
        {
          user: {
            name: 'shahbaj',
            display: require('../assets/1.jpg'),
            location: 'Jawahar circle',
            time: '12 pm'
          }
        }
      ]
    }
  },
  components: {
    posts,
    FontAwesomeIcon
  }
}
</script>
