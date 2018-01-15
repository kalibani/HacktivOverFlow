<template lang="html">
  <div class="">
  <div class="container" v-if="show">
    <div class="">
      <img src="http://www.tedgoas.com/content/blog/22-stack-overflow-design/-stack-overflow-cover.jpg" alt="" style="width:40%;">
    </div>
    <div class="row">
      <div class="col-md-6">
        <br>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" v-model="users.email" placeholder="Enter email">
          </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" v-model="users.password" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input type="text" class="form-control" v-model="users.username"placeholder="Username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Fullname</label>
          <input type="text" class="form-control" v-model="users.fullname"placeholder="Fullname">
        </div>
        <button type="button" class="btn btn-success" @click="register(users).then(clear)">Sign Up</button>
      </form>
      <br>
    </div>
    </div>
  </div>
  <div class="" v-else>
    <appQuestions/>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import questions from './questions.vue'
export default {
  data(){
    return {
      users:{
        email:'',
        password:'',
        username:'',
        fullname:''
      },
      show: true
    }
  },
  components:{
    appQuestions : questions
  },
  created(){
    this.hideForm()
  },
  methods:{
    hideForm(){
      let token = localStorage.getItem('token')
      if (token) {
        this.show = false
      }
    },
    ...mapActions(['register']),
    clear(){
      this.users = {}
    }
  }
}
</script>

<style scoped="" lang="css">
body {
}

.row > div {
  margin-top: 2%;
  margin-left: 22%;
  margin-right: 17%;
  border: #cdcdcd thin solid;
  border-radius: 3px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  align-items: center;
}
</style>
