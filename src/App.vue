<template>
    <div id="app">
        <nav-bar :websiteName="websiteName" :items="items"></nav-bar>
        <div class="row">
            <div class="col-md-2">
            </div>
            <div class="col-md-8">
        <Custom-Carousel :items="images"></Custom-Carousel>
            </div>
            <div class="col-md-2">

            </div>
        </div>
        </div>

</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/layout/NavBar.vue';
import CustomCarousel from './components/Home.vue';
export default{
  name: 'App',
  data()  {
      return {
    websiteName:"Practice.com",
    items:[
    {name:'home',href:"/home"},
    {name:'about-us',href:"/about -us"},
    ],
    images: [
    ]
  }
  },
  components: {
    NavBar,
    CustomCarousel
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/photos/').then(function(data){
          this.images = data.body.slice(0,40);
      });
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
