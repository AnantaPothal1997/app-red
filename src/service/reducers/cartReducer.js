import { ADD_TO_CART } from "../constants/ActionTypes"



const intialState = {
    cartData:[]
}


export const cartReducer = (state = intialState, action)=>{

    // eslint-disable-next-line default-case
    switch(action.type){
        case ADD_TO_CART:{
            // console.log(action);
            // console.log(state.cartData);
            let newCartData  = [...state.cartData, action.data]
            // console.log(newCartData);
            return {
                ...state,
                cartData: newCartData
            }
        }
        default:{
            return state
        }
    }

}