import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
import { showNotification } from './notificationReducer'

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

export const voteAnecdote = id => {
  return async dispatch => {
    await anecdoteService.vote(id)
    dispatch(voteSlice({ id }))
    const anecdote = await anecdoteService.getById(id)
    dispatch(showNotification(`You voted for: ${anecdote.content}`, 5))
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
    dispatch(setAnecdotes(sortedAnecdotes))
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