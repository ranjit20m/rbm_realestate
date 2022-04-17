import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'; 

export const fetchApi = async (url) =>  {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '71cdb9b299msh70e73490afb58dfp12e2f9jsn980e439f9e25'
          }
    })

    return data;
}