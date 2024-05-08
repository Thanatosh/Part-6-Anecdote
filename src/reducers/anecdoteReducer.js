import { createSlice } from '@reduxjs/toolkit'

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

export const { voteSlice, addAnecdoteSlice, setAnecdotes } = actions
export default reducer