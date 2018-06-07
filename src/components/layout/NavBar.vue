<template>
    <div class="header">
            <div class="row">
            <div class="col-sm-4">
                <a class="website" href="#">{{websiteName}}</a>
            </div>
                <div class="col-sm-4">
            <div class="search">
                <input class="search-box rounded" type="text" name = "search" />
                <font-awesome-icon icon='search' class="button" />
            </div>
                </div>
                <div class="col-sm-4">
            <ul class="">
                <!--<li v-for ="(i, index) in items" :key=index ><a :href="i.href">{{i.name}}</a></li>-->
                <li v-for ="(i, index) in items" :key=index ><a :href="i.href"><font-awesome-icon :icon="i.icon" /></a></li>
            </ul>
                </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  name: 'NavBar',
  props: ['items', 'websiteName'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this   component only -->
<style scoped>
    li>.svg-inline--fa{
        font-size:20px;
    },
    .website{
        font-size: large;

    }
    h1, h2 {
        font-weight: normal;
    }
    .search{
        display:inline-block;
        border-radius:7%;
        width:100%;
    }
    .button{
        position: absolute;
        top:6px;
        right:30px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .header {
        background-color:white;
        color:black;
        border:2px solid black;
        padding: 15px;
    }
    .search-box{
        border:2px solid black;
        border-radius:12px;
        position:relative;
        width:100%;
    }
</style>
