
const endpoint = 'https://swapi.co/api/people/'; //API endpoint
const express = require('express'); //server made easy
const fetch = require('node-fetch'); //a module to use fetch in Node.js

const app = express(); //create the app

const PORT = process.env.PORT || 3000; //PORT var
const IP = process.env.IP; //IP var

//changing the id with a number it is possible to fetch data from different Star Wars characters
app.get('/char/:id', async (req, res) => { //async function
    try {
        const response = await fetch(endpoint + req.params.id); //await for the response
        const data = await response.json(); //await to transform it in json format
        const name = data.name; //collect char name
        const species = data.species[0]; //collect char species endpoint
        const speciesResponse = await fetch(species); //await to fetch a response from species endpoint
        const speciesData = await speciesResponse.json(); //await to transform it in json format
        const speciesName = speciesData.name; //collect species name of the char
        
        const sentence = `The Star Wars Character You're Looking For Is: ${name} and he/she is a ${speciesName}`;
    
        res.send(sentence); //send the sentence to the page!        
    } 
    catch(err) {
        console.log(err);
    }

});

app.listen(PORT, IP, () => {
    console.log('Server is running on PORT:' + PORT);
});







