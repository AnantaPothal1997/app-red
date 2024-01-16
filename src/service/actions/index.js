import { ADD_TO_CART } from "../constants/ActionTypes"

export const addToCart = (data)=>{
    return{
        type:ADD_TO_CART,
        data:data
    }
}