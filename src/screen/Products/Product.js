import React from "react";
import './Product.css';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import productDetail from './products.json';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const handleAddToCart = (item) => {
        toast.success("Successfully Added into Cart", {
            position: "bottom-right"
        });
        dispatch(addToCart(item));
    }
    return (
        <div className="productPage">
            <div className="productTopBanner">
                <div className="productTopBannerItems">
                    Electronics
                </div>
                <div className="productTopBannerItemsSubMenu">Mobiles & Accessories</div>
                <div className="productTopBannerItemsSubMenu">Laptops & Accessories</div>
                <div className="productTopBannerItemsSubMenu">TV & Home Entertainment</div>
                <div className="productTopBannerItemsSubMenu">Audio</div>
                <div className="productTopBannerItemsSubMenu">Cameras</div>
                <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
                <div className="productTopBannerItemsSubMenu">Smart Technology</div>
                <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
                <div className="productTopBannerItemsSubMenu">Office & Stationary</div>
            </div>

            <div className="productsPageMain">
                <div className="productsPageMainLeftCategory">
                    <div className="productsPageMainLeftCategoryTitle">Category</div>
                    <div className="productsPageMainLeftCategoryContent">
                        <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Macbooks</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="ratingleftBox">
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <div className="andup" > & Up</div>
                        </div>
                        <div className="ratingleftBox">
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <div className="andup" > & Up</div>
                        </div>
                        <div className="ratingleftBox">
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <div className="andup" > & Up</div>
                        </div>
                        <div className="ratingleftBox">
                            <StarIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ FontSize: "20px", color: "#febd69" }} />
                            <div className="andup" > & Up</div>
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                    </div>
                </div>

                <div className="productsPageMainRight">
                    <div className="productsPageMainRightTopBanner">
                        1-5 of results for <span className="productsPageMainRightTopBannerSpan">Macbooks</span>
                    </div>

                    <div className="itemsImageProductPage">
                        {
                            productDetail.product.map((item, index) => {
                                return (
                                    <div className="itemsImageProductPageOne" key={item.id}>
                                        <div className="imgBlockItemsImageProductPageOne">
                                            <img src={item.imageUrl} className="productImageProduct" alt="" />
                                        </div>
                                        <div className="productNameProduct">
                                            <div>{item.name}</div>
                                            <div className="productNameProductRating">
                                                <StarIcon sx={{ FontSize: "16px", color: "#febd69" }} />
                                                <StarIcon sx={{ FontSize: "16px", color: "#febd69" }} />
                                                <StarIcon sx={{ FontSize: "16px", color: "#febd69" }} />
                                                <StarIcon sx={{ FontSize: "16px", color: "#febd69" }} />
                                                <StarOutlineIcon sx={{ FontSize: "16px", color: "#febd69" }} />
                                            </div>
                                            <div className="PriceProductDetailPage">
                                                <div className="currencyText">₹</div>
                                                <div className="rateHomeDetail">
                                                    <div className="rateHomeDetailsPric">{item.price}</div>
                                                    <div className="addtoBasketBtn" onClick={() => { handleAddToCart(item) }}>Add to Cart</div>
                                                </div>
                                            </div>
                                            <div className="offProductPage">Upto 10% off on select Cards</div>
                                            <div className="freeDeliveryHomePage">Free Delivery By Amazon</div>
                                        </div>
                                    </div>
                                );
                            }

                            )
                        }


                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Products