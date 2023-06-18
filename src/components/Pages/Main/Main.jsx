import {UISlider } from '../../UI'
import {MainHeader, Grid} from '../Main'
import styles from './Main.module.scss'
import {useState} from 'react'

export const Main = () => {
const [search, setSearch] = useState('')
const [slider, setSlider] = useState(true)
  return (
    <div className={styles.main}>
        <MainHeader setSearch={setSearch}/>
        {slider?<UISlider/>:<></>}
        <Grid slider={slider} setSlider={setSlider} search={search}/>
    </div>
  )
}
