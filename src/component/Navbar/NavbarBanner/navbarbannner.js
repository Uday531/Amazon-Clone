import React from "react";
import './navbarbanner.css';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Link } from "react-router-dom";
const NavbarBanner =() =>{
    const options = [
        { "name": "Fresh"},
        { "name": "Amazon miniT"},
        { "name": "Sell"},
        { "name": "Best Sellers"},
        { "name": "Todays Deals"}, { "name": "Mobiles"}, {"name": "Electronics "}, { "name": "Prime"}
    ]
    return (
        <div className="navbarBanner">
            <div className="navbarBannerOptionsLeft">
                <div className="optionsNavbarBanner">
                    <MenuOpenOutlinedIcon sx={{ fontSize:"24px"}}/>
                    <div className="allOptionsNavbarBanner">All</div>
                </div>
                {
                    options.map((item, ind) => {
                        return (
                            <Link to={'/Product'}className="optionsNavbarBanner" key={ind}>
                                <div className="allOptionsNavbarBanner">{item.name}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default NavbarBanner