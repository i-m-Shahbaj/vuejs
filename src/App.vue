<template>
    <div id="app">
        <nav-bar v-if="$route.path==='/register' || $route.path==='/login' ? false : true" :websiteName="websiteName" :items="items"></nav-bar>
        <router-view :key="$route.name"></router-view>
        </div>

</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/layout/NavBar.vue';

export default{
  name: 'App',
  data()  {
      return {
    websiteName:"PhotoGrame",
    items:[
    {icon:'compass',href:'#'},
    {icon:'heart',href:'#'},
      {icon:'user',href:'/profile'}
    ],
  }
  },
  components: {
    NavBar
  },
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: opx;
    }
</style>
