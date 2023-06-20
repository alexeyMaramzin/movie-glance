import styles from './UIThemeToggler.module.scss';
import {ReactComponent as Light} from '../../../assets/icons/Light.svg'
import {ReactComponent as Dark} from '../../../assets/icons/Dark.svg'
import {ThemeContext, themes} from '../../../context/ThemeContext'
import {useRef, useState} from 'react'

export const UIThemeToggler = () => {
const thumb = useRef()
  
return (
    <ThemeContext.Consumer>
        {({theme, setTheme})=>(
            <div 
                onClick={()=>{
                    if(theme===themes.light) setTheme(themes.dark)
                    else setTheme(themes.light)
                }}
                className={styles.toggler}>
                <Light/>
                <Dark/>
                <div ref={thumb} className={theme===themes.light?styles.toggler__thumb_light:styles.toggler__thumb_dark}>

                </div>
            </div>
        )}
    </ThemeContext.Consumer>
  )
}