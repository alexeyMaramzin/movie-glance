import { UIMovieCard} from "../../UI"
import { useFavourite } from "../../../hooks/useFavourite"
import styles from "./Liked.module.scss"

export const Liked = (props) => {
  const {favourite} = useFavourite()
  return (
      <section className={styles.liked_grid}>
        {favourite.map(fav=><UIMovieCard setLikedActive={props.setLikedActive} setWatch={props.setWatch} key={fav.filmId} film={fav}/>)}
      </section>
  )
}
