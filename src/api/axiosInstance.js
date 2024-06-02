// THIS IS AXIOS WE CALL API AND MADE A BASEAPI ONCE AND CALL EVERYWHERE WE USED THIS....
// BY BASE URL OF THE APIS ARE SAME WE ONLY ADD SOME LAST PART TO BASEAPI AND GET DATA.......
import axios from 'axios';

export const baseApi = axios.create
({
    baseURL : "https://spotify-web2.p.rapidapi.com",
   
    headers: {
        'X-RapidAPI-Key': '1d9d8acc58msh0acef937d501d5fp1686dajsn640d448b057a',
        'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
      }
});
