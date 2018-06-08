<template>
    <div class="container-fluid">
        <div class="post" v-for="(p, index) in posts" :key=index>
        <div class="post-auther">
            <div class="row">
                <div class="col-sm-2 profile-picture">
                    <img :src="p.user.display" class="user-profile img-circle" />
                </div>
                <div class="col-sm-7">
                    <div class="user-info">
                        <h5>{{p.user.name}}</h5>
                        <p>{{p.user.location}}</p>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="time-stamp">
                        <p>{{p.user.time}}</p>
                    </div>
                </div>
            </div>
        </div>
            <div class="row ">
                <div class="col-sm-12 image">
                <img :src="p.user.display" class="user-post"/>
                </div>
            </div>
    </div>
    </div>
</template>
<script>
export default{
  name: 'posts',
  props: ['posts']
}
</script>
<style scoped>
.time-stamp{
    padding:6px;
}
.post{
    background-color:aquamarine;
    padding:2px;
    border:2px solid black;
    margin-top:40px;
}

h5{
    color:red;
}
.image{
    //border:2px solid black;
}
.user-post{
    width:100%;
    height:100%;
}

.profile-picture>img{
    border:2px solid black;
    width:60px;
    height:60px;
}
.user-info{
    margin-left:-118px;
}
</style>
