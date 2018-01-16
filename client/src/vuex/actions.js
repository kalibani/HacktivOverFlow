import axios from 'axios'
import router from '../router'
import swal from 'sweetalert'

const token = localStorage.getItem('token')
const http = axios.create({
  baseURL: 'http://localhost:3000/api',
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

export const getAnswers = ({ commit }) => {
  http.get('/answer')
  .then(({data}) => {
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
          timer: 1000,
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
          timer: 1000,
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
      if (data.message === 'likes') {
        commit('saveAnswerLike', data)
        swal({
          text: 'likes',
          timer: 1000,
          icon: 'success',
          button: 'OK'
        }).then(location.reload())
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
      if (data.message === 'dislike') {
        commit('saveAnswerDislike', data)
        swal({
          text: 'dislike',
          timer: 1000,
          icon: 'success',
          button: 'OK'
        }).then(location.reload())
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

// export const getAnswers = ({ commit }) => {
//   http.get('/answer')
//   .then(({data}) => {
//     commit('saveAnswers', data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }

// export const addBook = ({ commit }, payload) => {
//   console.log('payload addbook', payload)
//   let book = new FormData()
//   book.append('title', payload.title)
//   book.append('author', payload.author)
//   book.append('content', payload.content)
//   book.append('image', payload.image)
//   http.post('/articles', book)
//   .then(({data}) => {
//     console.log(data)
//     commit('saveBooks', data)
//     swal({
//       title: 'OK',
//       text: data.message,
//       icon: 'success',
//       button: 'OK'
//     }).then(() => {
//       router.push('/admin')
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
//
// export const editBook = ({ commit }, payload) => {
//   console.log('payload editbook', payload)
//   let book = new FormData()
//   book.append('title', payload.title)
//   book.append('author', payload.author)
//   book.append('content', payload.content)
//   book.append('image', payload.image)
//   http.put('/articles/' + payload.id, book)
//   .then(({data}) => {
//     console.log(data)
//     commit('saveEditedBooks', data)
//     swal({
//       title: 'OK',
//       text: data.message,
//       icon: 'success',
//       button: 'OK'
//     }).then(() => {
//       router.push('/admin')
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
//
// export const deletedBook = ({ commit }, id) => {
//   console.log('payload deletedBook', id)
//   http.delete('/articles/' + id)
//   .then(({data}) => {
//     console.log(data)
//     commit('saveDeletedBooks', data)
//     swal({
//       title: 'OK',
//       text: 'book succesfully deleted',
//       icon: 'success',
//       button: 'OK'
//     }).then(() => {
//       router.push('/admin')
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
