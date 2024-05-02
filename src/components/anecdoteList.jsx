import { useDispatch, useSelector } from 'react-redux'
import { voteCreator } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div>
      {anecdote.content} 
      <div><strong> has {anecdote.votes} votes </strong></div>
      <button onClick={handleClick}>Vote</button>
    </div>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteCreator(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => 
            vote(anecdote.id)
          }
        />
      )}
    </div>
  )
}

export default Anecdotes