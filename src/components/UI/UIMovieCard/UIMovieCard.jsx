import { UILikeButton } from '../UILikeButton'
import styles from './UIMovieCard.module.scss'
import {useState, useRef} from 'react'
import axios from 'axios'
import cn from 'classnames'
import { useActions } from '../../../hooks/useActions'
import { useFavourite } from '../../../hooks/useFavourite'
import { UIButton } from '../UIButton/UIButton'
import { NavLink } from 'react-router-dom'
const API_KEY = "a4a19467-69da-45bf-a1bd-1be67bab2cee"
const config ={
        headers:{
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY
        }
    }

export const UIMovieCard = (props) => {    
    const ID = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${props.film.filmId}`
    const {favourite} = useFavourite()
    const {toggleFavourite} = useActions()
    const isExist = props.film.filmId?favourite.some(m => m.filmId===props.film.filmId):favourite.some(m => m.id===props.film.id)
    const [like, setLike] = useState({"1":{}})
    const [front, setFront] = useState(true)
    const [description, setDescription] = useState('Movie')
    const [flag, setFlag] = useState(true)
    const [height, setHeight] = useState('850px')
    const genres = props.film.filmId?props.film.genres.map((genre)=> genre.genre):props.film.genres.map((genre)=>genre.name)
    const heightRef = useRef()
    const getHeight = () => {
        setHeight(heightRef.current.getBoundingClientRect().height);
    }
    const getDescription = async () =>{
        axios.get(ID, config).then((res)=>{const result=res.data; setDescription(result); setFlag(false)})
        console.log("Get description")
    }
    const getRating = (rating)=>{
        if((rating>1)&&(rating<6)) return styles.card__rating_red; else
        if((rating>=6)&&(rating<7)) return styles.card__rating_yellow; else
        if((rating>=7)&&(rating<=10)) return styles.card__rating_green; else return 0
    }
    
    return (
        <article
            onClick={(e)=>{
                if(e.target.tagName!=='svg'&&e.target.tagName!=='BUTTON'&&e.target.tagName!=='path')
                {getHeight();
                setFront(!front);
                if(flag && !props.film.recomendation && props.film.filmId) getDescription();}
            }}
            className={styles.rotate}>
            <div ref={heightRef} className={cn(styles.card, styles.front, front?0:styles.r_front)}>
                <img
                    className={styles.card__image}
                    src={props.film.filmId?props.film.posterUrlPreview:props.film.poster.previewUrl}
                    alt='123'
                />
                <div className={styles.card__wrapper}>
                    <h4 className={styles.card__rating}>
                        оценка:
                        <div className={cn(styles.card__rating_value, 
                            props.film.filmId?getRating(props.film.rating):props.film.rating.kp?getRating(props.film.rating.kp):0)}>
                            {props.film.filmId?props.film.rating==='null'?'?':props.film.rating:props.film.rating.kp}
                        </div>
                        <div style={{width: '99px'}}></div>
                    </h4>
                    <h1 style={{marginTop: '18px'}}>{props.film.filmId?props.film.nameRu:props.film.name}</h1>
                </div> 
                <div className={styles.card__genres}>
                    <p className={styles.card__genres_list}>
                        {genres?genres.join(', '):null}
                    </p>
                    <UILikeButton
                        onClick={()=>{
                            toggleFavourite(props.film);
                        }}
                        isExist = {isExist}
                        slide={1}
                        like={like}
                        setLike={setLike}
                    />
                </div>
            </div>
            <div
                style={{
                    height: height,
                    backgroundImage: `url(${props.film.filmId?props.film.posterUrlPreview:props.film.poster.previewUrl})`
                }}
                    className={cn(styles.card, styles.back, front?0:styles.r_back)
                }>
                <div className={styles.back__content}>
                    <div className={styles.back__content_wrapper}>
                        <h1 style={{margin: '18px 0 18px 0', fontSize: '32px'}}>{props.film.filmId?props.film.nameRu:props.film.name}</h1>
                        <p style={{color: '#FFD600'}} className={styles.card__genres_list}>
                            {genres?genres.join(', '):null}
                        </p>
                        <p className={styles.card__description}>
                            {(props.film.recomendation||!props.film.filmId)?props.film.description:description.description}
                        </p>
                        <h4 className={styles.card__rating}>
                            оценка:
                            <div className={cn(styles.card__rating_value, 
                                getRating(props.film.filmId?props.film.rating:props.film.rating.kp))}>
                                {props.film.filmId?props.film.rating:props.film.rating.kp}
                            </div>
                            <div style={{width: '99px'}}></div>
                        </h4>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div
                        onClick={()=>{
                            props.setWatch(`https://api1595508308.multikland.net/embed/kp/${props.film.filmId?props.film.filmId:props.film.id}/?theme=1`);
                            if (props.setLogoActive) props.setLogoActive(true)
                            if (props.setLikedActive) props.setLikedActive(true)
                        }} 
                        className={styles.back__watch}>
                        <NavLink to ='/watch'>
                            <UIButton
                                padding='35px 25px'
                                text='Смотреть'
                                active={true}
                                />
                        </NavLink>
                    </div>
                    <div className={styles.back__like}>
                        <UILikeButton
                            onClick={()=>toggleFavourite(props.film)}
                            isExist = {isExist}
                            slide={1}
                            like={like}
                            setLike={setLike}
                        />
                    </div>
                </div>
            </div>
        </article>
     )
}
 