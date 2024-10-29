const express = require('express')
const app = express() // stores everything that comes with express for easy use.
const cors = require('cors')
const PORT = 8000

app.use(cors()) //this is the api

const residents = {
    'spongebob squarepants': {
        'age': 38,
        'job': 'Fry Cook at the Krusty Krab',
        'favFood': 'Krabby Patties'
    },
    'patrick star': {
        'age': 40,
        'job': 'unemployed',
        'favFood': 'Krabby Patties or  Triple Gooberberry Sunrises'
    },
    'mr.krabs': {
        'age': 80,
        'job': 'Owner of The Krusty Krab',
        'favFood': 'Krabby Patties'
    },
    'plankton': {
        'age': 40,
        'job': 'Stealing the Secret Recipe of the Krabby Patty',
        'favFood': 'Krabby Patties'
    },
    'squidward': {
        'age': 46,
        'job': 'Cashier and Artist',
        'favFood': 'Krabby Patties'
    },
    'sandy cheeks': {
        'age': '33',
        'job': 'Scientist',
        'favFood': 'Krabby Patties or Haycorns'
    },
    'unknown': {
        'age': 0,
        'job': 'unknown',
        'favFood': 'unknown'
    }
}
app.get('/', (request, response) => { // get request on root route, like an event listener or a fetch.
    response.sendFile(__dirname + '/index.html')
}) // response from server to send back html
app.get('/main.js', (request, response) => {
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:resident', (request, response) => {
    const residentName = request.params.resident.toLowerCase()

    if (residents[residentName]) {
        response.json(residents[residentName])
    } else {
        response.json(residents['unknown'])
    }



})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

