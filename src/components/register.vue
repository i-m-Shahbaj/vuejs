<template>
    <div class="container">
        <div class="row centered-form">
            <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please sign up </h3>
                    </div>
                    <div class="panel-body">
                        <form role="form"  >
                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="First Name" :v-model="credential.first_name" required>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Last Name" :v-model="credential.last_name" required>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address" :v-model="credential.email" required>
                            </div>
                            <div class="form-group">
                                <input type="text" name="contact" id="contact" class="form-control input-sm" placeholder="Email Address" :v-model="credential.contact" required>
                            </div>

                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password" :v-model="credential.password" required>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirm Password" :v-model="confirm" required>
                                    </div>
                                </div>
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
export default {
  data () {
    return {
      credential: {
        first_name: null,
        last_name: null,
        password: null,
        contact: null
      },
      confirm: null
    }
  },
  methods: {
    register () {
      const endpoint = 'auth/register'
      console.log('hello')
      this.$http.post(endpoint, this.credential).then((data) => {
        if (typeof data.data === 'object') {
          console.log(data)
        }
      }, (data) => {
        console.log(data)
      })
    }
  }
}

</script>
<style scoped>
body{
    background-color: #525252;
}
.centered-form{
    margin-top: 60px;
}
.centered-form .panel{
    background: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;
}
</style>
