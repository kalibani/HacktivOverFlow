<template lang="html">
  <div class="container">
    <div class="row">
        <div class="col-md-12">
          <div class="">
            <h4 style="text-align:left">{{question.title}}</h4>
            <hr>
            <span class="pull-left">
              <button type="button" class="btn btn-sm btn-default" name="button">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> {{question.upvote.length}}
              </button>
              <button type="button" class="btn btn-sm btn-default" name="button">
                <i class="fa fa-thumbs-down" aria-hidden="true"></i> {{question.downvote.length}}
              </button>
            </span>
            <span class="pull-right" v-if="user.userId == question.posted_by">
              <router-link class="btn btn-sm btn-primary" :to="{ name: 'updateQuestion', params: {id:1} }">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update
              </router-link>
              <button type="button" class="btn btn-sm btn-danger" name="button">
                <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
              </button>
            </span>
            <br><br>
            <div class="col-md-8" style="margin-left:15%;">
              <p style="text-align:left;"><span v-html="question.isi"></span></p>
            </div>
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
            <br><br>
            <div class="col-md-8" style="margin-left:15%;">
              <p style="text-align:left;">Click a button to show an alert Click a button to show an alert Click a button to show an alert Click a button to show an alertClick a button to show an alertClick a button to show an alertClick a button to show an alert</p>
            </div>
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
import { mapActions, mapState } from 'vuex'

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

  computed:{
    ...mapState([
      'user',
      'question'
    ])
  },

  watch: {
    '$route' (to, from) {
      this.getQuestionById(this.$route.params.id)
    }
  },

  created(){
    this.getProfile()
    this.getQuestionById(this.$route.params.id)
  },

  methods:{
    addAnswer(){

    },

    ...mapActions([
      'getProfile',
      'getQuestionById'
    ])
  }
}
</script>

<style lang="css">
</style>
