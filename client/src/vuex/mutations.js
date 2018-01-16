export const saveQuestions = (state, payload) => {
  state.questions = payload
}

export const saveQuestionById = (state, payload) => {
  state.question = payload
}

export const saveUser = (state, payload) => {
  state.user = payload
}

export const saveAnswers = (state, payload) => {
  state.answers = payload
}

export const saveQuestionLike = (state, payload) => {
  state.question = payload.data
}

export const saveQuestionDislike = (state, payload) => {
  state.question = payload.data
}

export const saveAnswerLike = (state, payload) => {
  let index = state.answers.findIndex( a => a._id === payload.data._id)
  if (index !== -1) {
    state.answers[index] = payload.data
  } else {
    state.answers.push(payload.data)
  }

}

export const saveAnswerDislike = (state, payload) => {
  let index = state.answers.findIndex( a => a._id === payload.data._id)
  if (index !== -1) {
    state.answers[index] = payload.data
  } else {
    state.answers.push(payload.data)
  }
}

// export const saveBooks = (state, payload) => {
//   console.log('payload saveBooks', payload.dataArticle)
//   state.articles.push(payload.dataArticle)
// }
//
// export const saveEditedBooks = (state, payload) => {
//   console.log('payload mutations', payload.updatedArticle._id)
//   let index = state.articles.indexOf(payload.updatedArticle._id)
//   state.articles.splice(index, 1, payload.updatedArticle)
// }
//
// export const saveDeletedBooks = (state, payload) => {
//   console.log('payload mutations delete', payload)
//   let index = state.articles.indexOf(payload._id)
//   state.articles.splice(index, 1)
//   console.log(state.articles)
// }
