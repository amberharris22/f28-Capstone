const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const{getTrucks, addTruck, deleteTruck, updateLikes}=require('./controller')

app.get('/getTrucks', getTrucks)
app.post('/addTruck', addTruck)
app.delete('/deleteTruck/:id', deleteTruck)
app.put('/updateLikes/:id', updateLikes)

app.listen(5050, ()=> console.log('Listening on port 5050'))