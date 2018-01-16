import axios from 'axios'
import router from '../router'
import swal from 'sweetalert'

const token = localStorage.getItem('token')
const http = axios.create({
  baseURL: 'http://hacktivoverflow-api.kautzaralibani.com/api',
  headers: {
    Authorization: token
  }
})

export const getAllQuestion = ({ commit }) => {
  http.get('/question')
  .then(({data}) => {
    commit('saveQuestions', data)
  }).catch((err) => {
    console.log(err)
  })
}

export const getQuestionById = ({ commit }, id) => {
  http.get('/question/' + id)
  .then(({data}) => {
    commit('saveQuestionById', data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const login = ({ commit }, payload) => {
  http.post('/auth/login', payload)
  .then(({data}) => {
    localStorage.setItem('token', data.token)
    if (data.token) {
      swal({
        title: 'OK',
        text: data.message,
        icon: 'success',
        button: 'OK'
      }).then(() => {
        location.reload()
        router.push('/questions')
      })
    } else {
      swal({
        title: 'error',
        text: data.message,
        icon: 'error',
        button: 'OK'
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getProfile = ({ commit }) => {
  let token = localStorage.getItem('token')
  if (token) {
    http.post('/auth/profile')
    .then(({data}) => {
      commit('saveUser', data)
    })
    .catch((err) => {
      console.log(err)
    })
  } else {
    console.log('belum login');
  }
}

export const register = ({ commit }, payload) => {
  http.post('/auth/register', payload)
  .then(({data}) => {
    if (data.message == 'Register Success!') {
      swal({
        title: 'OK',
        text: data.message,
        icon: 'success',
        button: 'OK'
      })
    } else {
      swal({
        title: 'error',
        text: data.message,
        icon: 'error',
        button: 'OK'
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getAnswers = ({ commit }, id) => {
  console.log('ini id', id);
  http.get('/answer/'+id)
  .then(({data}) => {
    console.log('nih', data);
    commit('saveAnswers', data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const questionLike = ({ commit }, id) => {
  let token = localStorage.getItem('token')
  if (token) {
    http.put('/question/upvote/'+id)
    .then(({data}) => {
      if (data.message === 'likes') {
        commit('saveQuestionLike', data)
        swal({
          text: 'like',
          timer: 800,
          icon: 'success',
          button: 'OK'
        })
      }

    })
    .catch((err) => {
      console.log(err)
    })
  } else {
    swal({
      title: 'error',
      text: 'You need login first',
      icon: 'error',
      button: 'OK'
    })
  }
}

export const questionDislike = ({ commit }, id) => {
  let token = localStorage.getItem('token')
  if (token) {
    http.put('/question/downvote/'+id)
    .then(({data}) => {
      if (data.message === 'dislike') {
        commit('saveQuestionDislike', data)
        swal({
          text: 'dislike',
          timer: 800,
          icon: 'success',
          button: 'OK'
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  } else {
    swal({
      title: 'error',
      text: 'You need login first',
      icon: 'error',
      button: 'OK'
    })
  }
}

export const answerLike = ({ commit }, id) => {
  let token = localStorage.getItem('token')
  if (token) {
    http.put('/answer/upvote/'+id)
    .then(({data}) => {
      commit('saveAnswerLike', data)
      if (data.message === 'likes') {
        swal({
          text: 'likes',
          timer: 800,
          icon: 'success',
          button: 'OK'
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  } else {
    swal({
      title: 'error',
      text: 'You need login first',
      icon: 'error',
      button: 'OK'
    })
  }
}

export const answerDislike = ({ commit }, id) => {
  let token = localStorage.getItem('token')
  if (token) {
    http.put('/answer/downvote/'+id)
    .then(({data}) => {
      commit('saveAnswerDislike', data)
      if (data.message === 'dislike') {
        swal({
          text: 'dislike',
          timer: 800,
          icon: 'success',
          button: 'OK'
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  } else {
    swal({
      title: 'error',
      text: 'You need login first',
      icon: 'error',
      button: 'OK'
    })
  }
}

export const addQuestion = ({ commit }, payload) => {
  http.post('/question', payload)
  .then(({data}) => {
    commit('saveAddQuestions', data)
    if (data.message === 'Question Succesfully Added!') {
      swal({
        text: data.message,
        icon: 'success',
        button: 'OK'
      }).then(() => {
        router.push('/questions')
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const updateQuestion = ({ commit }, payload) => {
  http.put('/question/update/'+ payload.id, payload)
  .then(({data}) => {
    commit('saveUpdateQuestions', data)
    if (data.message === 'Update Success') {
      swal({
        text: data.message,
        icon: 'success',
        button: 'OK'
      }).then(() => {
        router.push('/question/'+payload.id)
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const deleteQuestion = ({ commit }, id) => {
  http.delete('/question/'+ id)
  .then(({data}) => {
    if (data.message === "Question successfully deleted!") {
      swal({
        text: data.message,
        icon: 'success',
        button: 'OK'
      }).then(() => {
        router.push('/questions')
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const addAnswer = ({ commit }, payload) => {
  let token = localStorage.getItem('token')
  if (token) {
    http.post('/answer', payload)
    .then(({data}) => {
      commit('saveAddAnswers', data)
      if (data.message === 'Answer Succesfully Added!') {
        swal({
          text: data.message,
          icon: 'success',
          button: 'OK'
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  } else {
    swal({
      title: 'error',
      text: 'You need login first',
      icon: 'error',
      button: 'OK'
    })
  }
}

export const deleteAnswer = ({ commit }, id) => {
  http.delete('/answer/'+ id)
  .then(({data}) => {
    if (data.message === "Answer successfully deleted!") {
      commit('saveDelete', data)
      swal({
        text: data.message,
        icon: 'success',
        button: 'OK'
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}
