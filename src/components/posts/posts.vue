<template>
    <div class="row">
        <div class="col-md-4 posts" v-for="(i, index) in images" :key=index v-on:click="openPost">
            <div class="img">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                <img :src="i.src" :id="`img-${i.name}`" class="img"/></button>
            </div>
        </div>
    </div>
</template>
<script type="text/babel ">
export default{
  props: ['images'],
  methods: {
    openPost: function (event) {
      document.getElementById('myPost').style.width = '100%'
    }
  }
}
</script>
<style>
.img>button>img {
    width: 100%;
    height: 100%;
}
.img{
}
.posts{
    padding:1%;
}
.posts > .img{
    border:1px solid black;
}
</style>
