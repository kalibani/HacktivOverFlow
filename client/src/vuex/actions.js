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
  console.log('----',id);
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
  http.post('/auth/profile')
  .then(({data}) => {
    let token = localStorage.getItem('token')
    if (token) {
      commit('saveUser', data)
    } else {
      console.log('belum login');
    }
  })
  .catch((err) => {
    console.log(err)
  })
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
