<template>
    <div class="navbar">
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">{{websiteName}}</a>
            </div>
            <ul class="nav navbar-nav">
                <li v-for ="(i, index) in items" :key=index ><a :href="i.href">{{i.name}}</a></li>
            </ul>
        </div>
    </nav>
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
    h1, h2 {
        font-weight: normal;
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
</style>
