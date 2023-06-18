import styles from './UISlider.module.scss'
import { UIRoundButton, UILikeButton} from '../../UI'
import {useState, useRef} from 'react'
import films from '../../../recomendations.json'

export const UISlider = () => {
    const [like, setLike] = useState(films)
    const [slide, setSlide] = useState(1)
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const length=Object.keys(films).length
    const ref = useRef()
   
    return ( 
        <div
            ref={ref}
            className={styles.slider}
            style={{backgroundImage: `url(${films[slide].src})`}}
            onMouseMove={(e)=>{
                ref.current.style.backgroundPositionX = e.clientX/10-200 + "px" 
                ref.current.style.backgroundPositionY = e.clientY/10-100 + "px"
              }}
            >
            <div
                className={styles.slider__container}>
                <h2>Рекомендую:</h2>
                <h1>{films[slide].title}</h1>
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
                        <span style={{margin: '18px'}}/>
                        <UIRoundButton 
                            arrow='right'
                            active={active1}
                            onClick={()=>{slide===length?setSlide(1):setSlide(slide+1);
                                setTimeout(()=>{setActive1(false)}, 200);setActive1(true);}}
                        />
                    </div>
                    <div className={styles.slider__buttons_like}>
                       <UILikeButton
                            slide={slide}
                            like={like}
                            setLike={setLike}
                        /> 
                    </div>
                </div>
            </div>
        </div>
     )
}
