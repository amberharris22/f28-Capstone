const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
require('dotenv').config()
app.use(express.json())
app.use(cors())

const{getTrucks, addTruck, deleteTruck, updateLikes, getContact}=require('./controller')

app.get('/getTrucks', getTrucks)
app.post('/addTruck', addTruck)
app.delete('/deleteTruck/:id', deleteTruck)
app.put('/updateLikes/:id', updateLikes)
app.get('/contact', getContact)

app.get('/', (req, res) => (res.sendFile(path.join(__dirname, '../Client/main.html'))))
app.use(express.static(path.join(__dirname, '../Client')))

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(`Listening on port ${port}`))