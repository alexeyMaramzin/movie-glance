import styles from './Main.module.scss'
import { UIButton, UIInput } from '../../UI'
import {useState} from 'react'

export const MainHeader = (props) => {
const [input, setInput] = useState('')
  return (
    <header className={styles.mainHeader}>
        <div
          onClick={()=>{props.setSearch(''); setInput('')}}
          onMouseMove={(e)=>{
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
            setTimeout(()=>{e.target.style.setProperty('--x', x + 'px')}, 0);
            setTimeout(()=>{e.target.style.setProperty('--y', y + 'px')}, 0);
          }}
          className={styles.mainHeader__logo_active}>
          <h1>
            Movie Glance
          </h1>
          <p>
            Кино - это не просто формат развлечения, это целое 
            искусство, способное перенести нас в другие миры и 
            дать пережить все возможные эмоции.
          </p>
        </div>
        <div style={{margin: '0 20px'}}>
          <UIButton 
            text='понравившиеся фильмы'
            padding='41px 28px'
          />
        </div>
        <UIInput
          input={input}
          setInput={setInput}
          setSearch={props.setSearch}
          text='поиск...'
          padding='41px 32px 41px 88px'
        />
    </header>
  )
}
