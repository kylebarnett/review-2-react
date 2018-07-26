const express = require('express')
const bodyParser = require('body-parser')
const lc = require('./listController')

const app = express();

app.use(bodyParser.json())

//routes
// this get is to send back the list
app.get('/api/list', lc.getList)
app.post('/api/list', lc.addItem)
app.delete('/api/list/:id', lc.deleteItem)
app.put('/api/list/:id', lc.updateItem)


app.listen(7777, () => {
  console.log('Bloody Hell 7777')
})