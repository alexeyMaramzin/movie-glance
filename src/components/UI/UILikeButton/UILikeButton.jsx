import styles from './UILikeButton.module.scss'
import {ReactComponent as LikeIcon} from '../../../assets/icons/Like.svg'
import {ReactComponent as LikeActive} from '../../../assets/icons/LikeActive.svg'
export const UILikeButton = (props) => {
 
    return (
        <button 
            onClick={()=>{
                props.setLike({...props.like, [props.slide]
                    :{...props.like[props.slide],like
                    :!props.like[props.slide].like}});
                    props.onClick();
                    }
                }
            className={props.isExist?styles.like_active:styles.like_button}>
            {props.isExist?<LikeActive/>:<LikeIcon/>}
        </button>
     )
}
 