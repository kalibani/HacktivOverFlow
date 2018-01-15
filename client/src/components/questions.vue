<template lang="html">
  <div class="container">
    <div class="row">
        <div class="col-md-12">
          <div class="" style="float:right"><button @click="addQuestion" class="btn btn-secondary btn-sm btn-block">Ask Question</button></div>
          <br>
          <hr>
          <div class="">
            <p style="float:right">votes 0</p>
            <router-link class="nav-link" :to="{ name: 'question', params: {id:1} }"><h4>title question</h4></router-link>
            <br>
            <div class="">
              <br>
              <p style="float:left;">Using v-html directive: <span v-html="rawHtml"></span></p>
              <br>
            </div>

            <hr>
          </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
  methods:{
    addQuestion(){
      const token = localStorage.getItem('token')
      if (token) {
        this.$router.push('/addQuestion')
      }else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="css">
.nav-link {
  float: left;
  color: #000000;
}
.nav-link:hover {
  color:  #778899;
}
</style>
