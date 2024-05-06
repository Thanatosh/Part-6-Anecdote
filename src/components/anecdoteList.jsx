import { useDispatch, useSelector } from 'react-redux'
import { voteSlice } from '../reducers/anecdoteReducer'

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
  const anecdotes = useSelector(state => {
    const filter = state.filter
    const filterText = filter ? filter.toLowerCase() : ''

    return filterText
      ? state.anecdotes.filter(anecdote =>
          anecdote.content.toLowerCase().includes(filterText)
        )
      : state.anecdotes
  })

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteSlice({ id }))
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