<template lang="html">
  <div class="container">
    <div class="row">
        <div class="col-md-12">
          <div class="">
            <h4 style="text-align:left">Title Question</h4>
            <hr>
            <span class="pull-left">
              <button type="button" class="btn btn-sm btn-default" name="button">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> 10
              </button>
              <button type="button" class="btn btn-sm btn-default" name="button">
                <i class="fa fa-thumbs-down" aria-hidden="true"></i> 10
              </button>
            </span>
            <span class="pull-right">
              <button type="button" class="btn btn-sm btn-primary" name="button">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update
              </button>
              <button type="button" class="btn btn-sm btn-danger" name="button">
                <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
              </button>
            </span>
            <p style="text-align:left; margin-left:15%;">Click a button to show an alert</p>
            <hr>
          </div>
          <br>
          <h4 style="text-align:left">Answers</h4>
          <div class="">
            <hr>
            <span class="pull-left">
              <button type="button" class="btn btn-sm btn-default" name="button">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> 10
              </button>
              <button type="button" class="btn btn-sm btn-default" name="button">
                <i class="fa fa-thumbs-down" aria-hidden="true"></i> 10
              </button>
            </span>
            <span class="pull-right">
              <button type="button" class="btn btn-sm btn-danger" name="button">
                <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
              </button>
            </span>
            <p style="text-align:left; margin-left:15%;">Click a button to show an alert</p>
            <hr>
          </div>
          <div class="form-group"style="margin-top:10%;">
            <h4 style="float:left">Your Answer</h4>
            <br><br>
            <vue-editor v-model="answer.isi"></vue-editor>
          </div>
          <div class="" style="float:left"><button @click="addAnswer" class="btn btn-primary   btn-md btn-block">Submit</button></div>
        </div>
    </div>
</div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  data(){
    return {
      answer: {
        isi: ''
      }
    }
  },
  components:{
    VueEditor
  },
  methods:{
    addAnswer(){

    }
  }
}
</script>

<style lang="css">
</style>
