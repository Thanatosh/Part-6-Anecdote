import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.elements.anecdote.value
    console.log('content', content)
    event.target.elements.anecdote.value = ''
    dispatch({ type: 'ADD_ANECDOTE', content })
  }

  const vote = (id) => {
    console.log('vote', id)
    dispatch({ type: 'VOTE', id })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>Vote</button>
          </div>
        </div>
      )}
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default App