import styles from './UIRoundButton.module.scss'

export const UIPaginationButton = (props) => {
const height = (!props.slider)?0:900;
    return ( 
        <button 
            onClick={()=>{
                props.setPage(props.page); 
                window.scrollTo({top: height, left: 0, behavior: "smooth"});
            }}
            className={props.page===props.active?styles.pagination__button_active:styles.pagination__button}
        >
            {props.page}
        </button>
     )
}
