import Vue from 'vue'
import Router from 'vue-router'
import questions from '@/components/questions'
import question from '@/components/question'
import register from '@/components/register'
import addQuestion from '@/components/addQuestion'
import updateQuestion from '@/components/updateQuestion'

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
      path: '/question/edit/:id',
      name: 'updateQuestion',
      component: updateQuestion,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (token) {
          next()
        } else {
          swal({
            title: 'Ooops',
            text: `You don't Have Access! `,
            icon: 'error',
            button: 'OK'
          })
          next('/')
        }
      }
    },
    {
      path: '/addquestion',
      name: 'addQuestion',
      component: addQuestion,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (token) {
          next()
        } else {
          swal({
            title: 'Ooops',
            text: `You don't Have Access! `,
            icon: 'error',
            button: 'OK'
          })
          next('/')
        }
      }
    }
  ],
  mode : 'history'
})
