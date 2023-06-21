import styles from './UIButton.module.scss';

export const UIButton = (children) => {
  return (
    <button
      onMouseMove={(e)=>{
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;
        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
      }}
      onClick={children.onClick}
      style={{padding: children.padding}}
      className={children.active?styles.UIButton__active:styles.UIButton}
    >
      <span style={{position: 'relative', pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: '20px'}}>{children.text}{children.icon}</span>
    </button>
  )
}