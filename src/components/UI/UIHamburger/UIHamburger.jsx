import styles from './UIHamburger.module.scss';
import { NavLink } from 'react-router-dom'
import { UIButton } from '../UIButton';
import {useState} from 'react'

export const UIHamburger = () => {
const [active, setActive] = useState(true)
  return (
    <div 
        onClick={()=>setActive(!active)}
        className={styles.hamburger}>
        <button className={active?null:styles.hamburger__cross}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <section>

        </section>
    </div>
  )
}