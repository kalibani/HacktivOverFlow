<template lang="html">
  <div class="">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <br>
      <form>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Question">
          </div>
          <vue-editor v-model="answer.isi"></vue-editor>
        <button type="submit" class="btn btn-success" style="margin: 5px 0 10px; 10px;">Add Question</button>
      </form>
    </div>
    <br>

    </div>
  </div>
</div>
</template>

<script>
import navbar from './navbar.vue'
import { VueEditor } from 'vue2-editor'
export default {
  components:{
    appNavbar : navbar,
    VueEditor
  },
  data(){
    return {
      answer: {
        title: '',
        isi: ''
      }
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
