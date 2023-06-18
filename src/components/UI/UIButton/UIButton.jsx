import styles from './UIButton.module.scss';
import cn from 'classnames';

export const UIButton = (children) => {
  return (
    <button
      onMouseMove={(e)=>{
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;
        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
      }}
      style={{padding: children.padding}}
      className={cn(styles.UIButton)}
    >
      <span style={{position: 'relative', pointerEvents: 'none'}}>{children.text}</span>
    </button>
  )
}