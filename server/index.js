const express = require('express')
const app = express()
const path = require('path')

app.get('/test', (req, res) => {
	res.send({msg: "Hello there"})
})

app.use(express.static(path.join(__dirname, 'dist')))
app.set('views', path.join(__dirname, 'dist'))
app.set('views engine', 'html')

app.get('/', (req, res) => {
	res.status(200).render('index')
})

app.listen(4242, () => {
	console.log('we are listening port 4242')
})