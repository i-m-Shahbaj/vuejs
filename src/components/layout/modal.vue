<template>
    <div id="myPost" class="overlay">
        <a href="javascript:void(0)" class="closebtn" v-on:click="closePost">&times;</a>
        <div class="overlay-content">
            <div class="row content">
                <div class="col-md-6" id="postImage">
                    <img :src="post.image_url" class="postImage"/>
                </div>
                <div class="col-md-6">
                    <div class="profile">
                        <img :src="profileInfo.profile_image_url" class="img-circle"><span>{{profileInfo.name}}</span>
                    </div>
                    <div class="comments">
                        <ul>
                            <li v-for="(comment, index) in comments" :key="index"><b>{{comment.user}}</b>&nbsp;<p>{{comment.content}}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'modal',
  props: ['comments', 'profileInfo', 'post'],
  methods: {
    closePost: function (event) {
      document.getElementById('myPost').style.width = '0%'
    }
  }
}

</script>
<style scoped>
#postImage{
    padding-bottom:10%;
}
.profile>img{
    height:30px;
    width:30px;
}
.postImage{
    height:400px;
    width:100%;
    margin-left:20%;
}
.overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}
.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}
ul>li{
    list-style-type: none;
    color:white;
}
</style>
