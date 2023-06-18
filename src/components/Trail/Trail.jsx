import {useRef, useState, useCallback, useEffect} from 'react'
import './Trail.scss'
export const Trail = () => {
    const ref = useRef();
    const [ imagePos, setImagePos ] = useState({ x: 0, y: 0 });

    const handlerMoveMouse = useCallback((e) => {
        const rect = ref.current.getBoundingClientRect();
        setImagePos({ x: e.x - rect.x, y: e.y - rect.y });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handlerMoveMouse);
    }, [handlerMoveMouse]);

    return (
        <div ref={ ref } className='draw-container'>
            <span className='image' style={{ left: imagePos.x, top: imagePos.y }}/>
        </div>
    )
}