import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const vote = async (id) => {
  const response = await axios.get(baseUrl)
  let anecdotes = response.data
  const anecdoteToUpdate = anecdotes.find(anecdote => anecdote.id === id)
  if (anecdoteToUpdate) {
    anecdoteToUpdate.votes += 1
    anecdotes.sort((a, b) => b.votes - a.votes)

    await axios.put(`${baseUrl}/${id}`, anecdoteToUpdate)
  }
}

export default { 
    getAll,
    createNew,
    vote,
    getById
}