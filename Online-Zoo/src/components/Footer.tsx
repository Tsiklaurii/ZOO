import { NavLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

import YouTube from '../../public/icons/YouTube.svg';
import Instagram from '../../public/icons/Instagram.svg';
import Facebook from '../../public/icons/Facebook.svg';
import LogoWhite from '../../public/icons/Logo_white.svg';
import YemDigital from '../../public/icons/Yem_Digital.svg';
import RsSchool from '../../public/icons/Rs_school_js_logo.svg';
import ClosePopup from '../../public/icons/Close_popup.svg';
import DonationPopup1 from '../../public/images/Donation_popup_1.png';
import { useState } from 'react';
import Button from './Button';

const Footer = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
        document.body.classList.add("no_scroll");
    };

    const closePopup = () => {
        setIsOpen(false);
        document.body.classList.remove("no_scroll");
    };

    return (
        <footer>
            <div className="container">
                <div className="footer_nav">
                    <div className="footer_logos">
                        <a href="index.html"><img src={LogoWhite} alt="Footer Logo" /></a>
                        <a href="https://www.yemdigital.com/"><img src={YemDigital} alt="Yem Digital Logo" /></a>
                        <a href="https://rs.school/courses/short-track"><img src={RsSchool} alt="Rs School Logo" /></a>
                    </div>
                    <nav>
                        <ul className="nav">
                            <NavLink to='/'><li>{t("nav.about")}</li></NavLink>
                            <NavLink to='/map'><li>{t("nav.map")}</li></NavLink>
                            <NavLink to='/zoos'><li>{t("nav.zoos")}</li></NavLink>
                            <NavLink to='/contact'><li>{t("nav.contact")}</li></NavLink>
                        </ul>
                    </nav>
                    <Button onClick={openPopup} text={t("footer.button")}><svg width="25" height="22" viewBox="0 0 25 22" xmlns="http://www.w3.org/2000/svg"> <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                        d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z" />
                    </svg></Button>

                    <div className={`donation_popup_1 ${isOpen ? "active" : ""}`}>
                        <div className="popup_content">
                            <img className="close_popup" src={ClosePopup} alt="Close Pop Up" onClick={closePopup} />
                            <img src={DonationPopup1} alt="Donation Pop Up" />
                            <h2>{t("footer_popup.title")}</h2>
                            <p>{t("footer_popup.description")}</p>
                            <div>
                                <button className="btn">$20</button>
                                <button className="btn">$30</button>
                                <button className="btn">$50</button>
                                <button className="btn">$80</button>
                                <button className="btn">$100</button>
                                <button className="btn">{t("footer_popup.button")}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_soc_networks">
                    <div className="copyright">
                        <p>© 2021 DinaK</p>
                        <p>© Yem Digital</p>
                        <p>© RSSchool</p>
                    </div>
                    <div className="soc_networks">
                        <a href="https://www.youtube.com/@RSSchool"><img src={YouTube} alt="YouTube" /></a>
                        <a href="https://www.instagram.com/rsschool_en?igsh=em1janI5bzZ0dXlx"><img src={Instagram} alt="Instagram" /></a>
                        <a href="https://www.facebook.com/rsschoolEN"><img src={Facebook} alt="Facebook" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer