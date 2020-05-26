const express = require('express')
const app = express()

app.get('/test', (req, res) => {
	res.send({msg: "Hello there"})
})

app.get('/', (req, res) => {
	res.send("Hello World ! backend version")
})

app.listen(4242, () => {
	console.log('we are listening port 4242')
})