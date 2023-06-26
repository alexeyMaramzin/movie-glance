import styles from './UIHamburger.module.scss';
import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import cn from 'classnames'

export const UIHamburger = () => {
const [active, setActive] = useState(true)
  return (
    <div 
        onClick={()=>setActive(!active)}
        className={styles.hamburger}>
        <button className={cn(styles.hamburger__button, active?null:styles.hamburger__toggler)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul className={cn(styles.hamburger__section, active?null:styles.hamburger__section_active)}>
          <li className={styles.hamburger__section_item}>
            <NavLink to='/liked'>
              Понравившиеся фильмы
            </NavLink>
          </li>
          <li className={styles.hamburger__section_item}>
            <NavLink to='/random'>
              Испытать удачу
            </NavLink>
          </li>
        </ul>
    </div>
  )
}