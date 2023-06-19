import { useSelector } from "react-redux"
export const useFavourite = ()=>{
    const {favourite} = useSelector(state=>state)
    return {favourite}
}