import styles from './UIInput.module.scss';

export const UIInput = (props) => {
  return (
    <div className={styles.container}>
        <div
            className={styles.svg}>
            
        </div>
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            props.setSearch(props.input);
          }}
        >
          <input
            onChange={(e)=>props.setInput(e.target.value)}
            value={props.input}
            className={styles.UIInput}
            placeholder={props.text}
            style={{padding: props.padding}}
          />
        </form>
        
    </div>
  )
}