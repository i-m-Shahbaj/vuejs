<template>
    <div class="container-fluid">
        <div class="post" v-for="(p, index) in posts" :key=index>
        <div class="post-auther">
            <div class="row">
                <div class="col-2">
                    <img :src="p.user.display" class="user-profile" />
                </div>
                <div class="col-8">
                    <div class="user-info">
                        <h5>{{p.user.name}}</h5>
                        <p>{{p.user.location}}</p>
                    </div>
                </div>
                <div class="col-2">
                    <div class="time-stamp">
                        <p>{{p.user.time}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default{
  name: 'main',
  props: 'posts'
}
</script>
<style>
</style>
