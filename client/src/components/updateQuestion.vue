<template lang="html">
  <div class="">
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <br>
      <form>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="title" v-model="question.title">
          </div>
          <vue-editor v-model="question.isi"></vue-editor>
        <button type="button" class="btn btn-success" style="margin: 5px 0 10px; 10px;" @click="editQuestion(question._id)">Update Question</button>
      </form>
    </div>
    <br>

    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { VueEditor } from 'vue2-editor'
export default {
  components:{
    VueEditor
  },
  watch: {
    '$route' (to, from) {
      this.getQuestionById(this.$route.params.id)
    }
  },
  computed:{
    ...mapState(['question'])
  },
  created(){
    this.getQuestionById(this.$route.params.id)
  },
  methods:{
    ...mapActions([
      'getQuestionById',
      'updateQuestion'
    ]),
    editQuestion (id) {
      let obj = {
        id: id,
        title: this.question.title,
        isi: this.question.isi
      }
      this.updateQuestion(obj)
    }
  }
}
</script>

<style scoped="" lang="css">
body {
}
.row > div {
  text-align: left;
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 17%;
  border: #cdcdcd thin solid;
  border-radius: 3px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}
</style>
