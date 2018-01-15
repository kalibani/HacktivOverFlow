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
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input type="text" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Fullname</label>
          <input type="text" class="form-control" placeholder="Fullname">
        </div>
        <button type="submit" class="btn btn-success">Sign Up</button>
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
import questions from './questions.vue'
export default {
  data(){
    return {
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
