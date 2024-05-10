import { useDispatch } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const newAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.elements.anecdote.value
    console.log('content', content)
    event.target.elements.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(showNotification(`New Anecdote added: ${content}`, 5))
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