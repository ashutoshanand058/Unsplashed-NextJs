
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const CLIENT_ID = "J-nX5vfqhwL5mbYnFkmYcGqsD7oDgn2eQqz34dZwOXA";
const count = 1;

function getImages() {
    const router = useRouter();
    const endpoint = `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${router.query.search}&orientation=squarish&per_page=30`;
    const [state, setState] = useState([]);
    useEffect(() =>{
        (async () =>{
            const res = await axios.get(endpoint)
            setState(res.data.results)
        })()
    },[router.query.search])  
    return state;
}

export { getImages }
