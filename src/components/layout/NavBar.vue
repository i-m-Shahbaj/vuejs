<template>
    <div class="header">
            <div class="row">
            <div class="col-sm-4">
                <a class="website" href="#">{{websiteName}}</a>
            </div>
                <div class="col-sm-4">
            <div class="search">
                <input class="search-box rounded" type="text" name = "search"/>
            </div>
                </div>
                <div class="col-sm-4">
            <ul class="">
                <li v-for ="(i, index) in items" :key=index ><a :href="i.href">{{i.name}}</a></li>
            </ul>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['items', 'websiteName'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this   component only -->
<style scoped>
    .website{
        font-size: large;

    }
    h1, h2 {
        font-weight: normal;
    }
    .search{
        border-radius:7%;
        width:100%;
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
        width:100%;
    }
</style>
