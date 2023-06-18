import styles from './UIRoundButton.module.scss'

export const UIPaginationButton = (props) => {
    return ( 
        <button 
            onClick={()=>{
                props.setPage(props.page); 
                props.setActive(props.page);
                if(props.slider) window.scrollTo({top: 900, left: 0, behavior: "smooth"});
            }}
            className={props.page===props.active?styles.pagination__button_active:styles.pagination__button}
        >
            {props.page}
        </button>
     )
}
