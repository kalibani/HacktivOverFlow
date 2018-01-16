<template lang="html">
  <div class="container">
    <div class="row">
        <div class="col-md-12">
          <div class="" style="float:right"><button @click="addQuestion" class="btn btn-secondary btn-sm btn-block">Ask Question</button></div>
          <br>
          <hr>
          <div class="" v-for="q in questions" v-if="q.downvote || q.upvote">
            <p style="float:right">votes {{q.downvote.length + q.upvote.length}}</p>
            <router-link class="nav-link" :to="{ name: 'question', params: {id:q._id} }"><h4>{{q.title}}</h4></router-link>
            <br>
            <div class="">
              <br>
              <div class="col-md-8" style="margin-left:15%;">
                <p style="text-align:left;"><span v-html="q.isi"></span></p>
              </div>
              <br>
            </div>
            <hr>
          </div>

        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['questions'])
  },
  created(){
    this.getAllQuestion()
  },
  methods:{
    addQuestion(){
      const token = localStorage.getItem('token')
      if (token) {
        this.$router.push('/addQuestion')
      }else {
        this.$router.push('/')
      }
    },
    ...mapActions(['getAllQuestion'])
  }
}
</script>

<style lang="css">
.container {
  margin-top: 5%;
}
.nav-link {
  float: left;
  color: #778899;
}
.nav-link:hover {
  color: black;
}
</style>
