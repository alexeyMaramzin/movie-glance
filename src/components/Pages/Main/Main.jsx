import {UISlider } from '../../UI'
import {MainHeader, Grid} from '../Main'
import {Liked} from '../Liked'
import styles from './Main.module.scss'
import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
export const Main = () => {
const {toggleFavourite} = useActions()
const [search, setSearch] = useState('')
const [slider, setSlider] = useState(true)

useEffect(()=>{
  const storeMovies = JSON.parse(localStorage.getItem('liked')) ;
  if(storeMovies) storeMovies.map((movie)=>toggleFavourite(movie))
}, [toggleFavourite])
  return (
    <div className={styles.main}>
      <Router>
        <MainHeader active={slider} setActive={setSlider} setSearch={setSearch}/>
        <Routes>
          <Route path='/' element={
            <>
              {slider?<UISlider/>:null}
              <Grid slider={slider} setSlider={setSlider} search={search}/>
            </>
          }
          />
          <Route path='liked' element={<Liked/>}/>
        </Routes>
      </Router>
    </div>
  )
}
