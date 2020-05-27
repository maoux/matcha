import React from 'react'

const App = () => {
	let test = () => {
		fetch('/test', {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				'Accept': 'application/json'
			},
		})
		.then(res => {
			return res.json()
		}).then(res => {
			console.log('response:', res)
			alert(res.msg)
		})
		.catch(err => {
			alert("error")
			console.log("error", err)
		})
	}
	return (<div>Hello World ! front end verison
			<button onClick={test}>click me</button>

			</div>)
}

export default App