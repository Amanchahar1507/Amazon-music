import axios from 'axios';

export const baseApi = axios.create
({
    baseURL : "https://spotify-web2.p.rapidapi.com",
    // headers : {
    //     'x-rapidapi-key': '7c50f8e9d9mshfb37923d93ea0efp1b9d66jsndadfa2d8e987',
    //     'x-rapidapi-host': 'spotify-web2.p.rapidapi.com',
    //     'Content-Type': 'application/json'
    // },
    
    headers: {
        'X-RapidAPI-Key': '1d9d8acc58msh0acef937d501d5fp1686dajsn640d448b057a',
        'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
      }
});
