/* eslint-disable no-labels */

import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart } from '../service/actions'


const mapStateToProps = (state)=>{
    console.log(state.cartReducer);
    return {
        data: state.cartReducer
    }

}

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispath)=>({
    // eslint-disable-next-line no-unused-expressions
    addToCartHandler:data=>{
        dispath(addToCart(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)