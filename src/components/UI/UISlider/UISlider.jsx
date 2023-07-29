import styles from './UISlider.module.scss'
import { UIRoundButton, UILikeButton, UIButton} from '../../UI'
import {useState, useRef} from 'react'
import films from '../../../recomendations.json'
import { useActions } from '../../../hooks/useActions'
import { useFavourite } from '../../../hooks/useFavourite'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Play } from '../../../assets/icons/play-svgrepo-com.svg' 

export const UISlider = (props) => {
    const [like, setLike] = useState(films)
    const [slide, setSlide] = useState(1)
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const length=Object.keys(films).length
    const {favourite} = useFavourite()
    const {toggleFavourite} = useActions()
    const isExist = favourite.some(m => m.filmId===films[slide].filmId)
    const ref = useRef()
    
    return ( 
        <div
            ref={ref}
            className={styles.slider}
            style={{backgroundImage: `url(${films[slide].src})`}}
            onTouchMove={(e)=>{
                    ref.current.style.backgroundPositionX = e.clientX/10-200 + "px" 
                    ref.current.style.backgroundPositionY = e.clientY/10-100 + "px"
                }}
            onMouseMove={(e)=>{
                    ref.current.style.backgroundPositionX = e.clientX/10-200 + "px" 
                    ref.current.style.backgroundPositionY = e.clientY/10-100 + "px"
                }}
            >
            <div
                className={styles.slider__container}>
                <h2>Рекомендую:</h2>
                <h1>{films[slide].nameRu}</h1>
                <p className={styles.back__description}>
                    {films[slide].description}
                </p>
                <div className={styles.slider__buttons}>
                    <div>
                        <UIRoundButton 
                            arrow='left'
                            active={active}
                            onClick={()=>{slide===1?setSlide(length):setSlide(slide-1); 
                                setTimeout(()=>{setActive(false)}, 200);setActive(true);}}
                        /> 
                        <span className={styles.slider__buttons_gap}/>
                        <UIRoundButton 
                            arrow='right'
                            active={active1}
                            onClick={()=>{slide===length?setSlide(1):setSlide(slide+1);
                                setTimeout(()=>{setActive1(false)}, 200);setActive1(true);}}
                        />
                    </div>
                    <div className={styles.slider__buttons__wrapper}>
                        <div
                            onClick={()=>{
                                props.setWatch(`https://api1595508308.multikland.net/embed/kp/${films[slide].filmId}/?theme=1`);
                                if (props.setLogoActive)props.setLogoActive(true)
                            }} 
                            className={styles.slider__buttons__watch}
                            >
                            <NavLink to ='/watch'>
                                <UIButton
                                    padding='35px 25px'
                                    text='Смотреть'
                                    active={true}
                                    icon={<Play/>}
                                    />
                            </NavLink>
                        </div>
                        <div className={styles.slider__buttons_like}>
                           <UILikeButton
                                onClick={()=>toggleFavourite(films[slide])}
                                isExist={isExist}
                                slide={slide}
                                like={like}
                                setLike={setLike}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}
