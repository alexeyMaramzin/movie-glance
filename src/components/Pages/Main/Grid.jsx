import styles from './Main.module.scss'
import { UIMovieCard, UIPaginationButton } from '../../UI'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Grid = (props) => {
const API_KEY = "a4a19467-69da-45bf-a1bd-1be67bab2cee"
const config ={
    headers:{
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
    }
}
const [page, setPage] = useState(1)
const [active, setActive] = useState(1)
const [maxPage, setMaxPage] = useState(20)
const POPULAR = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`
const SEARCH = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${props.search +'&page='+ page}`
const [response, setResponse] = useState({})
const pages = [page-2, page-1, page, page+1, page+2, page+3].filter((el, id)=>[page-2, page-1, page, page+1, page+2, page+3].indexOf(el)===id)

useEffect(()=>{
    if(props.search.length>0) {
        axios.get(SEARCH, config).then(
            (res)=>{const result=res.data; setResponse(result); console.log("Search..."); setMaxPage(result.pagesCount)}
        ); 
        props.setSlider(false);
    }
}, [SEARCH])

useEffect(()=>{
    setPage(1);
    setActive(1);
}, [props.search])

useEffect(()=>{
    if(props.search==='') {
        setMaxPage(20);
        axios.get(POPULAR, config).then(
            (res)=>{const result=res.data; console.log("get movies"); setResponse(result)}
        ); 
        props.setSlider(true);
    }
}, [POPULAR, props.search.length])

    return (
        <div>
            <section className={styles.grid}>
                {
                    response.films?response.films.map(
                        film=>{if(film.nameRu) return <UIMovieCard key={film.filmId} film={film}/>}
                        ):null
                }
            </section>
            <div className={styles.grid__pagination}>
                {
                    pages.map(
                        (num, index)=>(num>0&&num<=maxPage&&num<=20)?
                    <UIPaginationButton key={index} slider={props.slider} page={num} setPage={setPage} active={active} setActive={setActive}/>
                    :null
                    )
                }
            </div>
        </div>
    )
  }
  