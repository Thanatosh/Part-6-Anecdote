import { useDispatch } from 'react-redux'
import { addAnecdoteSlice } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const newAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.elements.anecdote.value
    console.log('content', content)
    event.target.elements.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdoteSlice(newAnecdote))
    dispatch(setNotification(`New Anecdote added: ${content}`))
  }

  return (
    <form onSubmit={addAnecdote}>
      <h2>Create new</h2>
      <div><input name='anecdote'/></div>
      <button type='submit'>Create</button>
    </form>
  )
}

export default newAnecdote