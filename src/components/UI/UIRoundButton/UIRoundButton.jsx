import styles from './UIRoundButton.module.scss'
import {ReactComponent as ArrowLeft} from '../../../assets/icons/Arrow 1.svg'
import {ReactComponent as ArrowRight} from '../../../assets/icons/Arrow 2.svg'

export const UIRoundButton = (props) => {
    return ( 
        <button 
            onClick={props.onClick}
            className={props.active?styles.button_active:styles.round_button}>
            {props.arrow==='left'?<ArrowLeft/>:<ArrowRight/>}
        </button>
     )
}
