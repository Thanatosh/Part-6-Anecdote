import { useDispatch } from 'react-redux'
import { addAnecdoteSlice } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const newAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.elements.anecdote.value
    console.log('content', content)
    event.target.elements.anecdote.value = ''
    dispatch(addAnecdoteSlice({ content }))
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