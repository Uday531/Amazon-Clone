import React, { useState, useEffect } from "react";
import './Cart.css';
import amazonFulFill from '../../Assests/download.jpg';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    let a = 0;
    let cost = cartItems.map((item) => {return a = a+ item.price}) 
    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems])

    const handleRemoveFromCart=(id)=>{
toast.error("Item Removed From Cart", {
    position: "bottom-right"
})
        dispatch(removeFromCart(id));

    }
    return (
        <div className="Cart">
            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shopping Cart</div>
                <div className="DeselectAllCart">Deselect All Items</div>
                <div className="CartPriceTextDivider">Price</div>

                <div className="CartItemsDiv">
                    {
                        cartItems.map((item, ind) => {
                            return (
                                <div className="CartItemBlock">
                                    <div className="CartItemLeftBlock">
                                        <div className="CartItemLeftBlockImage">
                                            <img className="CartItemLeftBlockImg" src={ item.imageUrl} alt="" />
                                        </div>
                                        <div className="CartItemLeftBlockDetails">
                                            <div className="cartItemProductName">{item.name}</div>
                                            <div className="InStockCart">In Stock</div>
                                            <div className="EligibleForFreeShopping">Eligible For Free Shopping</div>
                                            <div className="amazonFulFilledImg"><img className="fulfilling" src={amazonFulFill} alt="" /></div>
                                            <div className="removeFromBasket" onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                                        </div>
                                    </div>

                                    <div className="cartItemRightBlock">
                                        Rs {item.price}
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
            <div className="topRightCart">
                <div className="subTotalTitle">SubTotal ({cartItem.length} items) : <span className="subTotalTitleSpan">Rs {a}</span></div>
                <div className="giftAddto">
                    <input type="checkbox" />
                    <div>This Order Contains a Gift</div>
                </div>
                <div className="proceedtobuy">Proceed to Buy</div>

            </div>
            <ToastContainer/>
        </div>
    )
}
export default Cart