require('dotenv').config();
console.log(process.env);
const axios = require('axios');
const chalk = require('chalk');

async function postarFoto () {

let kitty;

await axios.get('https://api.thecatapi.com/v1/images/search')
    .then((res) => {
        kitty = res.data[0].url;
    });
if (kitty.endsWith('.gif')) {
    return postarFoto();
}
console.log(kitty); 

axios.post('https://graph.facebook.com/v9.0/103703968333196/photos', {
    url: kitty,
    access_token: process.env.LONG_LIVED_PAGE_ACCESS_TOKEN
})
    .then((response) => {
        console.log(response.data)
    });
}

setInterval(postarFoto, 30000);