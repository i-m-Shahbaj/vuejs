<template>
    <div class="row">
        <div class="col-md-4 posts" v-for="(i, index) in images" :key=index>
            <div class="img">
                <img :src="i.src" :id="`img-${i.name}`" class="img"/>
            </div>
        </div>
    </div>
</template>
<script type="text/babel ">
export default{
  props: ['images']
}
</script>
<style>
.img>img {
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
