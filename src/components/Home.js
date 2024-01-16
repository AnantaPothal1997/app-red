import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../service/actions';

const Home = ()=>{


    // console.log("home component");
    // console.log(prop);

    const cartItems = useSelector((state)=>{
       console.log(state.cartReducer.cartData);
       return state.cartReducer.cartData
    })
    console.log(cartItems);

    const dispatch = useDispatch();


    const addItemsToCart = (data)=>{
        dispatch(addToCart(data))
    }
   
    // const addItemsToCart = (data)=>{
    //     console.log("add items to cart");
    //     // prop.addToCartHandler({data});
        
    // }
   return (
    <>
       <div className="h1 text-center">Home Componet</div>
       
       <div className="text-center">
       <div>
         cart items : {cartItems.length}
       </div>

       <div className=" border p-2 m-1">
         <div>price:100</div>
         <div>Name:alu</div>
         <button className="btn btn-primary" onClick={()=>{
            addItemsToCart({name:"alu", price:"100"})
         }}> Add to cart</button>
       </div>

       <div className=" border p-2 m-1">
         <div>price:10</div>
         <div>Name:kadali</div>
         <button className="btn btn-primary"  onClick={()=>{
            addItemsToCart({name:"kadali", price:"10"})
         }}> Add to cart</button>
       </div>
       </div>
       
    </>
   )
}

export default Home;

