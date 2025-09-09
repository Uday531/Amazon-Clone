import React from "react";
import './Footer.css';
import amazonLogo from '../../../Assests/Amazon-India-Logo-PNG-White2.webp';
const Footer = () => {
    return (
        <div className="Footer">
            <div className="FooterContent">
                <div className="Footercont1">
                    <div className="contentFooterTitle">Get to Know Us</div>
                    <div className="contentFooterSubtitleDiv">
                        <div className="contentFooerSubTitlecont">About Us</div>
                        <div className="contentFooerSubTitlecont">Careers</div>
                        <div className="contentFooerSubTitlecont">Press Releases</div>
                        <div className="contentFooerSubTitlecont">Amazon Science</div>
                    </div>
                </div>
                <div className="Footercont1">
                    <div className="contentFooterTitle">Connect with us</div>
                    <div className="contentFooterSubtitleDiv">
                        <div className="contentFooerSubTitlecont">Facebook</div>
                        <div className="contentFooerSubTitlecont">Twitter</div>
                        <div className="contentFooerSubTitlecont">Instagram</div>
                    </div>
                </div>
                <div className="Footercont1">
                    <div className="contentFooterTitle">Make Money with us</div>
                    <div className="contentFooterSubtitleDiv">
                        <div className="contentFooerSubTitlecont">sell on Amazon</div>
                        <div className="contentFooerSubTitlecont">sell under amazon Accelerator</div>
                        <div className="contentFooerSubTitlecont">Protect and build your Brand</div>
                        <div className="contentFooerSubTitlecont">Becom an Affilitate</div>
                    </div>
                </div>
                <div className="Footercont1">
                    <div className="contentFooterTitle">Let us help You</div>
                    <div className="contentFooterSubtitleDiv">
                        <div className="contentFooerSubTitlecont">Your Account</div>
                        <div className="contentFooerSubTitlecont">Returns Centre</div>
                        <div className="contentFooerSubTitlecont">Recalls and Product Safety Alerts</div>
                        <div className="contentFooerSubTitlecont">100% Purchase Protection</div>
                    </div>
                </div>

            </div>
            <div className="amazonImg">
                <img className="amazonImgFooter" src={amazonLogo} alt="" />
            </div>
        </div>
    )
}
export default Footer