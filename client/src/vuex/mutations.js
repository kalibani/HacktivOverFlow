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
  console.log(state.answers);
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
    state.answers.splice(index, 1, payload.data)
  } else {
    state.answers.push(payload.data)
  }

}

export const saveAnswerDislike = (state, payload) => {
  let index = state.answers.findIndex( a => a._id === payload.data._id)
  if (index !== -1) {
    state.answers.splice(index, 1, payload.data)
  } else {
    state.answers.push(payload.data)
  }
}

export const saveAddQuestions = (state, payload) => {
  state.questions.push(payload.data)
}

export const saveUpdateQuestions = (state, payload) => {
  state.question = payload.data
}

export const saveAddAnswers = (state, payload) => {
  console.log('sebelum di push', state.answers);
  console.log('ini apa', payload.dataanswer);
  state.answers.push(payload.dataanswer)
  console.log('cek',state.answers)
}
export const saveDelete = (state, payload) => {
  let index = state.answers.findIndex( a => a._id === payload.result._id)
  if (index !== -1) {
    state.answers.splice(index, 1)
  }
}
