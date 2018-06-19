<template>

    <div class="container">
        <div class="row centered-form">
            <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please sign up </h3>
                    </div>
                    <div class="panel-body">
                        <form  method="post" >
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="form-group">
                                        <div class="fg-line">
                                        <input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="First Name" v-model="credential.first_name" required>
                                        </div>
                                        <label class="control-label error" v-if="Errors.first_name">{{ Errors.first_name[0] }}</label>
                                        </div>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="fg-line">
                                    <div class="form-group">
                                        <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Last Name" v-model="credential.last_name" required>
                                    </div>
                                        <label class="control-label error" v-if="Errors.last_name">{{ Errors.last_name[0] }}</label>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="fg-line">
                                        <div class="form-group">
                                            <input type="text" name="username" id="username" class="form-control input-sm" placeholder="User Name" v-model="credential.userName" required :change="checkUser()">
                                        </div>
                                        <label class="control-label error" v-if="Errors.last_name">{{ Errors.last_name[0] }}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="fg-line">
                            <div class="form-group">
                                <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address" v-model="credential.email" required>
                            </div>
                                <label class="control-label error" v-if="Errors.email">{{ Errors.email[0] }}</label>
                            </div>
                            <div class="fg-line">
                            <div class="form-group">
                                <input type="text" name="contact" id="contact" class="form-control input-sm" placeholder="Contact" v-model="credential.contact" required>
                            </div>
                                <label class="control-label error" v-if="Errors.contact">{{ Errors.contact[0] }}</label>
                            </div>
                            <div class="fg-line">
                                    <div class="form-group">
                                        <input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password" v-model="credential.password" required>
                                    </div>
                    <label class="control-label error" v-if="Errors.password">{{ Errors.password[0] }}</label>
                                </div>
                            <input type="button" value="Register" v-on:click="register()"  class="btn btn-info btn-block">
                        </form>
                    </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
/* eslint-disable */

export default {
  data () {
    return {
      credential: {
        first_name: null,
        last_name: null,
        password: null,
        contact: null,
        userName: null
      },
      confirm: null,
      Errors: []
    }
  },
  methods: {
    register () {
      const endpoint = 'auth/register'
      this.$http.post(endpoint, this.credential).then((response) => {
        if (typeof response.data === 'object') {
          this.$store.commit('updateToken', response.data.data.token)
          this.$store.commit('updateUser', response.data.data.user)
          this.$router.replace('/dashboard')
        }
      }, (response) => {
        this.Errors = response.data.error.details
      })
    },
    checkUser() {
      const endpoint = 'auth/checkUser'
//      $this.$http.get(endpoint, this.)

    }
  }
}

</script>
<style scoped>
    .container{
        height:100%;
        background-image: url('../assets/back.png');
        color:red;
    }
    .centered-form{
        //margin-top: 60px;
    }
    .centered-form .panel{
        background: rgba(255, 255, 255, 0.8);
        box-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;
    }
    .error{
        color:red;
        font-family:Lato Heavy;
    }
</style>
