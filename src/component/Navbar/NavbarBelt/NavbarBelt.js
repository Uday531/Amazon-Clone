import React from "react";
import './navbarbelt.css';
import amazonLogo from '../../../Assests/Amazon-India-Logo-PNG-White2.webp';
import indialogo from  '../../../Assests/c43cf6da3730400d2ab62654b39bc61e.jpg';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarBelt = () => {
    const cartItems = useSelector((state) => state.cart.items);



    return (
        <div className="navbarBelt">
            <div className="leftNavBelt">
                <Link to={'/'} className="leftNavBeltLogo">
                    <img className="amazonLogoNavbar" src={amazonLogo} alt="amazonLogo"/>
                    <span className="navbar_inLogo"></span>
                </Link>

                <div className="navbarBeltLocation">
                    <div className="navbarBeltLocationImg">
                        <LocationOnOutlinedIcon className="navbarBeltLocationImgIcon" sx={{ fontSize : "22px" }} />
                    </div>
                    <div className="navbarBeltLocationPlace">
                        <div className="navbarBeltLocationTop">Delivering to Hyderabad 500060</div>
                        <div className="navbarBeltLoctaionBottom">Update Location</div>
                    </div>
                </div>
            </div>
            <div className="navbarBeltSearchBox">
                <div className="navbarBeltSearchDiv">
                    <div className="navbarBeltSearchBoxAll">
                        <div className="navbarBeltSearchBoxAllText">All </div>
                        <ArrowDropDownOutlinedIcon sx={{ fontsize : "20px"}}/>
                    </div>
                    <input type="text" className="navbarBeltInputSearchBox" placeholder='Search Amazon.in'/>
                    <div className="searchIconNavbarBelt">
                        <SearchOutlinedIcon sx={{fontSize:"25px"}} className='searchIconNavbarBeltIcon'/>
                    </div>
                </div>

            </div>
            <div className="rightSideNavbarBelt">
                <div className="indianFlagCode">
                    <img src={indialogo} alt="" className="indiaFlag"/>
                    <div className="indiaCodenavbarBelt">EN<ArrowDropDownOutlinedIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}} className="indiaCodeNavbarBeltDrop"/></div>
                </div>
                <Link to={'/Login'} className="helloSigninnavbarBelt">
                    <div className="helloTopNavbarBelt">Hello, User</div>
                    <div className="indiaCodeNavbarBelt">Accounts & Lists</div>
                </Link>
                <div className="helloSigninnavbarBelt">
                    <div className="helloTopNavbarBelt">Returns</div>
                    <div className="indiaCodeNavbarBelt">& Orders</div>
                </div>
                <Link to={'/cart'} className="helloSignInnavbarBelt">
                    <span className="cartItemNumberNavbarBelt">{cartItems.length}</span>
                    <div className="helloTopNavbarBelt" alt=""><ShoppingCartOutlinedIcon/><span className="cartTitle">Cart</span></div>
                </Link>

            </div>
            
        </div>

    )
}
export  default NavbarBelt