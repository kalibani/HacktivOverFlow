import Vue from 'vue'
import Router from 'vue-router'
import questions from '@/components/questions'
import question from '@/components/question'
import register from '@/components/register'
import addQuestion from '@/components/addQuestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '/questions',
      name: 'questions',
      component: questions
    },
    {
      path: '/question/:id',
      name: 'question',
      component: question
    },
    {
      path: '/addquestion',
      name: 'addQuestion',
      component: addQuestion
    }
  ],
  mode : 'history'
})
