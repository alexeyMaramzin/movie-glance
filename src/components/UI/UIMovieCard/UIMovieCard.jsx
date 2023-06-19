import { UILikeButton } from '../UILikeButton'
import styles from './UIMovieCard.module.scss'
import {useState, useRef} from 'react'
import axios from 'axios'
import cn from 'classnames'

export const UIMovieCard = (props) => {
    const API_KEY = "a4a19467-69da-45bf-a1bd-1be67bab2cee"
    const ID = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${props.film.filmId}`
    const config ={
    headers:{
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
    }
}
    const [like, setLike] = useState({"1":{}})
    const [front, setFront] = useState(true)
    const [description, setDescription] = useState('Movie')
    const [flag, setFlag] = useState(true)
    const [height, setHeight] = useState('850px')
    const genres = props.film.genres.map((genre, i)=> genre.genre)
    const heightRef = useRef()
    const getHeight = () => {
        setHeight(heightRef.current.getBoundingClientRect().height);
    }
    const getDescription = async () =>{
        axios.get(ID, config).then((res)=>{const result=res.data; setDescription(result); setFlag(false)})
        console.log("Get description")
    }
    return (
        <article
            onClick={(e)=>{
                if(e.target.tagName!=='svg'&&e.target.tagName!=='BUTTON'&&e.target.tagName!=='path')
                {getHeight();
                setFront(!front);
                if(flag) getDescription();}
            }}
            className={styles.rotate}>
            <div ref={heightRef} className={cn(styles.card, styles.front, front?0:styles.r_front)}>
                <img
                    className={styles.card__image}
                    src={props.film.posterUrlPreview}
                    alt='123'
                />
                <div className={styles.card__wrapper}>
                    <h4 className={styles.card__rating}>
                        оценка:
                        <div className={cn(styles.card__rating_value, 
                            (props.film.rating>1)&&(props.film.rating<6)?styles.card__rating_red:
                            (props.film.rating>=6)&&(props.film.rating<7)?styles.card__rating_yellow:
                            (props.film.rating>=7)&&(props.film.rating<=10)?styles.card__rating_green:0)}>
                            {props.film.rating==='null'?'?':props.film.rating}
                        </div>
                        <div style={{width: '99px'}}></div>
                    </h4>
                    <h1 style={{marginTop: '18px'}}>{props.film.nameRu}</h1>
                </div> 
                <div className={styles.card__genres}>
                    <p className={styles.card__genres_list}>
                        {genres.join(', ')}
                    </p>
                    <UILikeButton
                        slide={1}
                        like={like}
                        setLike={setLike}
                    />
                </div>
            </div>
            <div
                style={{
                    height: height,
                    backgroundImage: `url(${props.film.posterUrlPreview})`
                }}
                    className={cn(styles.card, styles.back, front?0:styles.r_back)
                }>
                <div className={styles.back__content}>
                    <div className={styles.back__content_wrapper}>
                        <h1 style={{margin: '18px 0 18px 0', fontSize: '32px'}}>{props.film.nameRu}</h1>
                        <p style={{color: '#FFD600'}} className={styles.card__genres_list}>
                            {genres.join(', ')}
                        </p>
                        <p className={styles.card__description}>
                            {description.description}
                        </p>
                        <h4 className={styles.card__rating}>
                            оценка:
                            <div className={cn(styles.card__rating_value, 
                                (props.film.rating>1)&&(props.film.rating<6)?styles.card__rating_red:
                                (props.film.rating>=6)&&(props.film.rating<7)?styles.card__rating_yellow:
                                (props.film.rating>=7)&&(props.film.rating<=10)?styles.card__rating_green:0)}>
                                {props.film.rating}
                            </div>
                            <div style={{width: '99px'}}></div>
                        </h4>
                    </div>
                </div>
                <div className={styles.back__like}>
                    <UILikeButton
                        slide={1}
                        like={like}
                        setLike={setLike}
                    />
                </div>
            </div>
        </article>
     )
}
 