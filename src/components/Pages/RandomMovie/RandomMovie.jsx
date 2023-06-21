import styles from './RandomMovie.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { UIMovieCard } from '../../UI'
const API_KEY = 'H4YNPYD-36E4656-H6ZCAPQ-PPFPFFD'
const RANDOM = 'https://api.kinopoisk.dev/v1.3/movie/random'
const config ={
    headers:{
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
    }
}
export const RandomMovie = (props) => {   
const [response, setResponse] = useState();
useEffect(()=>{
    axios.get(RANDOM, config).then(
        (res)=>{const result=res.data; setResponse(result); console.log(response)}
    ); 
    console.log(props.random)
}, [props.random])
    return (
        <section className={styles.random}>
            {response?<UIMovieCard
                film={response}
            />:<></>}
        </section>
     )
}
 