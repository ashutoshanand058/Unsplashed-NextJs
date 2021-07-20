import axios from 'axios'
import { useState, useEffect } from 'react'

const CLIENT_ID = "J-nX5vfqhwL5mbYnFkmYcGqsD7oDgn2eQqz34dZwOXA";
const endpoint = `https://api.unsplash.com/photos?client_id=${CLIENT_ID}&orientation=squarish&per_page=30`;
const count = 1;

function loader() {
    const [state, setState] = useState([]);
    useEffect(() =>{
        (async () =>{
            const res = await axios.get(endpoint)
            setState(res.data)
        })()
    },[count])    
    return state;
}


export { loader }
 