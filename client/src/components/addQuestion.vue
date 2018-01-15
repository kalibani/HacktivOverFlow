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
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Question</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="question"></textarea>
          </div>
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
export default {
  components:{
    appNavbar : navbar
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
