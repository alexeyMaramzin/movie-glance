import styles from './Watch.module.scss'

export const Watch = (props) => {
  return (
      <section className={styles.watch}>
        <iframe title='watch' allowfullscreen="" data-title="" frameborder="0" height="50%" id="frame" scrolling="no" 
            src={props.watch} style={{width: '970px', height: '630px'}}>
        </iframe>
      </section>
  )
}
