import styles from './Main.module.scss'
import { UIButton, UIInput } from '../../UI'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { UIThemeToggler } from '../../UI'

export const MainHeader = (props) => {
const [input, setInput] = useState('')
  return (
    <header className={styles.mainHeader}>
        <NavLink to='/'>
          <div
            onClick={()=>{props.setSearch(''); setInput(''); props.setActive(true)}}
            onMouseMove={(e)=>{
              var x = e.pageX - e.target.offsetLeft;
              var y = e.pageY - e.target.offsetTop;
              setTimeout(()=>{e.target.style.setProperty('--x', x + 'px')}, 0);
              setTimeout(()=>{e.target.style.setProperty('--y', y + 'px')}, 0);
            }}
            className={props.active?styles.mainHeader__logo:styles.mainHeader__logo_active}
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
        <NavLink to='/liked'>
          <div style={{margin: '0 20px'}}>
            <UIButton 
              text='понравившиеся фильмы'
              padding='41px 28px'
              active={props.active}
              onClick={()=>props.setActive(false)}
            />
          </div>
        </NavLink>
        <div>
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
