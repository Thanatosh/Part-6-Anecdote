import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/anecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteCreator(id))
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
      <div>
        <AnecdoteForm />
      </div>
    </div>
  )
}

export default App