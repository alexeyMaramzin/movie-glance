import { UIMovieCard} from "../../UI"
import { useFavourite } from "../../../hooks/useFavourite"
import { useEffect } from "react"
import styles from "./Liked.module.scss"

export const Liked = () => {
  const {favourite} = useFavourite()
  useEffect(()=>{
    console.log(favourite);
    localStorage.setItem('liked', JSON.stringify(favourite))
  }, [])
  return (
      <section className={styles.liked_grid}>
        {favourite.map(fav=><UIMovieCard key={fav.filmId} film={fav}/>)}
      </section>
  )
}
