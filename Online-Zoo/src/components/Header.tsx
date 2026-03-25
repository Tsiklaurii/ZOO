import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext';

import Logo from '../../public/icons/Logo.svg';
import YouTube from '../../public/icons/YouTube.svg';
import Instagram from '../../public/icons/Instagram.svg';
import Facebook from '../../public/icons/Facebook.svg';
import UserIcon from '../../public/icons/User.svg';
import Hamburger from '../../public/icons/Hamburger.svg';

const Header = () => {
    const { t, lang, setLang } = useLanguage();

    return (
        <header>
            <div className="container">
                <NavLink to='/'><img src={Logo} alt="Logo" className="logo" /></NavLink>
                <div className="menu">
                    <nav>
                        <ul className="nav">
                            <NavLink to='/'><li>{t("nav.about")}</li></NavLink>
                            <NavLink to='/map'><li>{t("nav.map")}</li></NavLink>
                            <NavLink to='/zoos'><li>{t("nav.zoos")}</li></NavLink>
                            <NavLink to='/contact'><li>{t("nav.contact")}</li></NavLink>
                            <li><a href="https://www.figma.com/design/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=21-4877&t=DSve9ApAfrSFVRN4-0" target="_blank">{t("nav.design")}</a></li>
                        </ul>
                    </nav>
                    <div className="networks">
                        <a href="https://www.youtube.com/@RSSchool"><img src={YouTube} alt="YouTube" /></a>
                        <a href="https://www.instagram.com/rsschool_en?igsh=em1janI5bzZ0dXlx"><img src={Instagram} alt="Instagram" /></a>
                        <a href="https://www.facebook.com/rsschoolEN"><img src={Facebook} alt="Facebook" /></a>
                        <div className="user">
                            <button className="user_icon" id="userIcon">
                                <img src={UserIcon} alt="User" />
                                <span id="userName" className="user_name"></span>
                            </button>
                            <div className="user_popup hidden" id="userPopup"></div>
                        </div>
                    </div>
                    <div className="lang_switcher">
                        <button
                            id="langEn"
                            className={`lang_btn ${lang === "en" ? "active" : ""}`}
                            onClick={() => setLang("en")}
                        >EN</button>
                        <button
                            id="langKa"
                            className={`lang_btn ${lang === "ka" ? "active" : ""}`}
                            onClick={() => setLang("ka")}
                        >KA</button>
                    </div>
                </div>
                <button className="hamburger"><img src={Hamburger} alt="Hamburger" /></button>
            </div>
        </header>
    )
}

export default Header