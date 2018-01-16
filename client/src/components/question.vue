<template lang="html">
  <div class="container">
    <div class="row">
        <div class="col-md-12">
          <div class="">
            <h4 style="text-align:left">{{question.title}}</h4>
            <hr>
            <span class="pull-left">
              <button type="button" @click="questionLike(question._id)" class="btn btn-sm btn-default" name="button" v-if="question.upvote">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> {{question.upvote.length}}
              </button>
              <button type="button" @click="questionDislike(question._id)" class="btn btn-sm btn-default" name="button" v-if="question.downvote">
                <i class="fa fa-thumbs-down" aria-hidden="true"></i> {{question.downvote.length}}
              </button>
            </span>
            <span class="pull-right" v-if="user.userId == question.posted_by">
              <router-link class="btn btn-sm btn-primary" :to="{ name: 'updateQuestion', params: {id:question._id} }">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update
              </router-link>
              <button type="button" class="btn btn-sm btn-danger" name="button" @click="deleteQuestion(question._id)">
                <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
              </button>
            </span>
            <br>
            <div class="col-md-8" style="margin-left:15%;">
              <p style="text-align:left;"><span v-html="question.isi"></span></p>
            </div>
            <hr>
          </div>
          <br>
          <h4 style="text-align:left">Answers</h4>
          <div class="" v-for="a in answers">
            <hr>
            <span class="pull-left">
              <button type="button" @click="answerLike(a._id)" class="btn btn-sm btn-default" name="button">
                <i class="fa fa-thumbs-up" aria-hidden="true" v-if="a.upvote"></i> {{a.upvote.length}}
              </button>
              <button type="button" @click="answerDislike(a._id)" class="btn btn-sm btn-default" name="button" v-if="a.downvote">
                <i class="fa fa-thumbs-down" aria-hidden="true"></i> {{a.downvote.length}}
              </button>
            </span>
            <span class="pull-right" v-if="user.userId == a.posted_by._id">
              <button type="button" class="btn btn-sm btn-danger" name="button" @click="deleteAnswer(a._id)">
                <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
              </button>
            </span>
            <br>
            <div class="col-md-2" style="margin-left:15%;">
              <p style="text-align:left;">by : <strong><span v-html="a.posted_by.username"></span></strong></p>
            </div>
            <div class="col-md-8" style="margin-left:15%;">
              <p style="text-align:left;"><span v-html="a.isi"></span></p>
            </div>
          </div>
          <hr>
          <div class="form-group"style="margin-top:5%;">
            <h4 style="float:left">Your Answer</h4>
            <br><br>
            <vue-editor v-model="jawaban.isi"></vue-editor>
          </div>
          <div class="" style="float:left"><button @click="addAnswers()" class="btn btn-primary   btn-md btn-block">Submit</button></div>
        </div>
    </div>
    <br><br>
</div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapActions, mapState } from 'vuex'

export default {
  data(){
    return {
      jawaban: {
        isi: '',
        questionId: ''
      }
    }
  },

  components:{
    VueEditor
  },

  computed:{
    ...mapState([
      'user',
      'question',
      'answers',
      'answer'
    ])
  },

  watch: {
    '$route' (to, from) {
      this.getQuestionById(this.$route.params.id)
      this.getAnswers(this.$route.params.id)
    }
  },

  created(){
    this.getProfile()
    this.getQuestionById(this.$route.params.id)
    this.getAnswers(this.$route.params.id)
  },

  methods:{
    ...mapActions([
      'getProfile',
      'getQuestionById',
      'getAnswers',
      'questionLike',
      'questionDislike',
      'answerLike',
      'answerDislike',
      'deleteQuestion',
      'addAnswer',
      'deleteAnswer'
    ]),
    addAnswers(){
      let obj = {
        isi: this.jawaban.isi,
        questionId: this.question._id
      }
      this.addAnswer(obj)
      this.jawaban.isi = ''
      this.getAnswers(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
