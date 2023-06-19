import styles from './Main.module.scss'
import { UIMovieCard, UIPaginationButton } from '../../UI'
import axios from 'axios'
import { useEffect, useState} from 'react'
const API_KEY = "a4a19467-69da-45bf-a1bd-1be67bab2cee"
const config ={
    headers:{
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
    }
}

export const Grid = ({slider, setSlider, search}) => {
const [page, setPage] = useState(1)
const POPULAR = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`
const SEARCH = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${search +'&page='+ page}`
const [maxPage, setMaxPage] = useState(20)
const [response, setResponse] = useState({})
const pages = [page-2, page-1, page, page+1, page+2, page+3].filter((el, id)=>[page-2, page-1, page, page+1, page+2, page+3].indexOf(el)===id)

useEffect(()=>{
    if(search.length>0) {
        axios.get(SEARCH, config).then(
            (res)=>{const result=res.data; setResponse(result); console.log("Search..."); setMaxPage(result.pagesCount)}
        ); 
        setSlider(false);
    }
}, [SEARCH, search, setSlider])

useEffect(()=>setPage(1), [search])

useEffect(()=>{
    if(search==='') {
        setMaxPage(20);
        axios.get(POPULAR, config).then(
            (res)=>{const result=res.data; console.log("get movies"); setResponse(result)}
        ); 
        setSlider(true);
    }
}, [POPULAR, search.length])

    return (
        <div>
            <section className={styles.grid}>
                {
                    response.films?response.films.map(
                        film=><UIMovieCard key={film.filmId} film={film}/>
                        ):null
                }
            </section>
            <div className={styles.grid__pagination}>
                {
                    pages.map(
                        (num, index)=>(num>0&&num<=maxPage&&num<=20)?
                    <UIPaginationButton key={index} slider={slider} page={num} setPage={setPage} active={page}/>
                    :null
                    )
                }
            </div>
        </div>
    )
  }
  