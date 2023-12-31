import styles from './Main.module.scss'
import { UIButton, UIInput } from '../../UI'
import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { UIThemeToggler, UIHamburger } from '../../UI'
import {ReactComponent as Random} from '../../../assets/icons/random.svg'

export const MainHeader = (props) => {
const [input, setInput] = useState('')
const [resolution, setResolution] = useState(window.innerWidth)
useEffect(()=>{
  const handleResolution=()=>setResolution(window.innerWidth)
  window.addEventListener('resize', handleResolution)
  return ()=>window.removeEventListener('resize', handleResolution)
}, [])
useEffect(()=>{
  if(input) {
    props.setLogoActive(true); props.setLikedActive(true)
  }
  else {
    props.setLogoActive(false);
  }
}, [input])
  return (
    <header className={styles.mainHeader}>
        <NavLink to='/'>
          <div
            onClick={()=>{
              props.setSearch(''); setInput(''); props.setLogoActive(false); props.setLikedActive(true);
            }}
            onMouseMove={(e)=>{
              var x = e.pageX - e.target.offsetLeft;
              var y = e.pageY - e.target.offsetTop;
              setTimeout(()=>{e.target.style.setProperty('--x', x + 'px')}, 0);
              setTimeout(()=>{e.target.style.setProperty('--y', y + 'px')}, 0);
            }}
            className={!props.logoActive?styles.mainHeader__logo:styles.mainHeader__logo_active}
          > 
            <h1>
              Movie Glance
            </h1>
            <p>
              Кино - это не просто формат развлечения, это целое 
              искусство, способное перенести нас в другие миры и 
              дать пережить все возможные эмоции.
            </p>
          </div>
        </NavLink>
        {resolution<768?<UIHamburger setLogoActive={props.setLogoActive}/>:null}
        {!(resolution<768)?
        <div className={styles.mainHeader__wrapper}>
          <NavLink to='/liked'>
            <div className={styles.mainHeader__header}>
              <UIButton 
                text='понравившиеся фильмы'
                padding='41px 28px'
                active={props.likedActive}
                onClick={()=>{
                  props.setLikedActive(false);
                  props.setLogoActive(true);
                }}
              />
            </div>
          </NavLink>
          <NavLink to='/random'>
            <div 
              onClick={()=>{
                props.setRandom(props.random+1);
                if (resolution<768) props.setLogoActive(true)
              }} 
              className={styles.mainHeader__random}
              >
              <UIButton
                text='испытать удачу'
                padding='40px 40px'
                active={true}
                icon={<Random/>}
                onClick={()=>{
                  props.setLogoActive(true);
                  props.setLikedActive(true)
                }}
              />
            </div>
          </NavLink>
        </div>
        :null}
        <div className={styles.mainHeader__search}>
          <UIInput
            input={input}
            setInput={setInput}
            setSearch={props.setSearch}
            text='поиск...'
            padding='41px 32px 41px 88px'
          />
          <UIThemeToggler/>
        </div>
    </header>
  )
}
