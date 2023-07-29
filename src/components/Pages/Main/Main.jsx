import {UISlider } from '../../UI'
import {MainHeader, Grid} from '../Main'
import {Liked} from '../Liked'
import { Watch } from '../Watch/Watch'
import styles from './Main.module.scss'
import {useEffect, useState} from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { RandomMovie } from '../RandomMovie/RandomMovie'

export const Main = () => {
const {toggleFavourite} = useActions()
const [logoActive, setLogoActive] = useState(false)
const [likedActive, setLikedActive] = useState(true)
const [search, setSearch] = useState('')
const [slider, setSlider] = useState(true)
const [random, setRandom] = useState(0)
const [watch, setWatch] = useState(0)

useEffect(()=>{
  const storeMovies = JSON.parse(localStorage.getItem('liked')) ;
  if(storeMovies) storeMovies.map((movie)=>toggleFavourite(movie))
}, [toggleFavourite])

  return (
    <div className={styles.main}>
      <HashRouter basename='/'>
        <MainHeader logoActive={logoActive} setLogoActive={setLogoActive} likedActive={likedActive} setLikedActive={setLikedActive} 
          active={slider} setActive={setSlider} setSearch={setSearch} random={random} setRandom={setRandom}/>
        <Routes>
          <Route path='/' element={
            <>
              {slider?<UISlider setWatch={setWatch} setLogoActive={setLogoActive}/>:null}
              <Grid setLogoActive={setLogoActive} setWatch={setWatch} slider={slider} setSlider={setSlider} search={search}/>
            </>
          }
          />
          <Route path='liked' element={<Liked setLikedActive={setLikedActive} setWatch={setWatch}/>}/>
          <Route path='random' element={<RandomMovie setLikedActive={setLikedActive} setWatch={setWatch} random={random}/>}/>
          <Route path='watch' element={<Watch watch={watch}/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}
