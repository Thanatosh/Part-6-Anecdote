import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const { reducer, actions } = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteSlice: (state, action) => {
      const { id } = action.payload
      const anecdoteToVote = state.find(anecdote => anecdote.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1
        state.sort((a, b) => b.votes - a.votes)
      }
    },
    addAnecdoteSlice: (state, action) => {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdoteSlice(newAnecdote))
  }
}

export const { voteSlice, addAnecdoteSlice, setAnecdotes } = actions
export default reducer