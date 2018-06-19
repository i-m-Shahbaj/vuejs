<template>
<div class="container">
    <div class="row" id="profile">
        <!--profile pic-->
        <div class="col-sm-4">
            <div class="profile-pic">
                <img :src="profileInfo.profile_image_url" class="img-circle" />
            </div>
        </div>
        <!--profile info-->
        <div class="col-sm-8">
            <div class="info-container">
            <div class="info">
                <ul class="lines">
                    <ul>
                        <li><b>{{profileInfo.userName}}</b></li>
                        <li><a href=""><button class="btn btn-default"><b>Edit Info</b></button></a></li>
                        <li><font-awesome-icon icon='cog' class="button" /></li>
                    </ul>
                </ul>
            </div>
            <div class="info">
                <ul class="lines">
                    <ul>
                        <li>
                            <b>{{profileInfo.postCount}}</b> <span>posts</span>
                        </li>
                        <li><b>{{profileInfo.followers}}</b> <span>followers</span></li>
                        <li><b>{{profileInfo.following}}</b> <span>following</span></li>
                    </ul>
                </ul>
            </div>
            <div class="info">
                <h4><b>{{profileInfo.name}}</b></h4>
            </div>
        </div>
        </div>
    </div>
    <div class="row container" id="content">
        <div class="post">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" v-on:click="displayPost = true">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" v-on:click="displayPost = false">Saved</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div v-if="displayPost" class="tab-pane  show active" id="home" role="tabpanel" aria-labelledby="home-tab"><posts :images="posts"></posts></div>
                <div  v-else class="tab-pane show " id="profile" role="tabpanel" aria-labelledby="profile-tab" ><posts :images="savedPosts"></posts></div>
            </div>
        </div>
    </div>
    <modal :comments="comments" :profile="profileInfo" ></modal>
</div>
</template>
<script >
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import Posts from './posts/posts.vue'
import modal from './layout/modal.vue'
export default{
  data () {
    return {
      profileInfo: {
        userName: 'shahbaj_khan',
        name: 'Shahbaj Khan',
        profile_image_url: require('../assets/1.jpg'),
        followers: '12',
        following: '199',
        postCount: '12'
      },
      comments: [
        {user: 'shahbaj khan', content: 'this is comment'},
        {user: 'sjflksdjf', content: 'thsi si second comments'},
        {user: 'sfsdfsdfs', content: 'sjflsdjfskld'}
      ],
      posts: [
        {src: require('../assets/1.jpg'), name: '1'},
        {src: require('../assets/1.jpg'), name: '2'},
        {src: require('../assets/1.jpg'), name: '3'},
        {src: require('../assets/1.jpg'), name: '4'},
        {src: require('../assets/1.jpg'), name: '5'}
      ],
      savedPosts: [
        {src: require('../assets/2.png'), name: '1'},
        {src: require('../assets/2.png'), name: '2'},
        {src: require('../assets/2.png'), name: '3'},
        {src: require('../assets/2.png'), name: '4'},
        {src: require('../assets/2.png'), name: '5'}
      ],
      displayPost: true
    }
  },
  components: {
    FontAwesomeIcon,
    Posts,
    modal
  }
}
</script>
<style scoped>
    #content{
        margin-top: 2%;
    }
    #myTab{
        padding-left:41%;
        border-bottom:none;
        border-top:1px solid #333;
    }
    #myTab>li{
        margin-top: -1px;
        border-top:1px solid #777;
    }
    .nav-tabs>li>a:hover, .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
        border: none;
        border-top: 1px solid #333;
        border-radius:0;
        background-color: transparent;
    }
    .info-container{
        margin-right:40%;
    }
    #profile{
        margin-top:20px;
    }
    .profile-pic{
        padding: 5%;
        margin-left: 50%;
    }
    ul{
        list-style-type: none;
    }
    li{
        display: inline-block;
        margin:10px;
    }
    .button{
        font-size: 20px;
    }
    .profile-pic>img{
        border:2px solid black;
        width:100px;
        height:100px;
    }
</style>
