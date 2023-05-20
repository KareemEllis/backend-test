require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//Import Models
const Note = require('./models/note')

const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())


// const note = new Note({
//   content: 'HTML is Easy',
//   important: true,
// })

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

// app.get('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   const note = notes.find(note => note.id == id)

//   if (note) {
//     response.json(note)
//   } else {
//     response.status(404).end()
//   }
// })

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (!body.content) {
//     return response.status(400).json({ 
//       error: 'content missing' 
//     })
//   }

//   const note = {
//     content: body.content,
//     important: body.important || false,
//     id: generateId(),
//   }

//   notes = notes.concat(note)

//   response.json(note)
// })

// app.delete('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
