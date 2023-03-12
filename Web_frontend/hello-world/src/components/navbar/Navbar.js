import React, { useState } from 'react';
import "../navbar/style.css"
import dshboard from "../../icon/apps.png"
import analitics from "../../icon/stats.png"
import bookmark from "../../icon/bookmark.png"
import business from "../../icon/business-chart.png"
import briefcase from "../../icon/briefcase.png"
import user from "../../icon/user.png"
import settings from "../../icon/settings.png"
import sun from "../../icon/sun.png"
import moon from "../../icon/moon-stars.png"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [navs, setNav] = useState(false);
    return (
        <div className="navs">
            <div onClick={() => setNav(!navs)} className="mobile_btn">
                {navs ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={
                navs ? ["menus", "active"].join(' ') : ["menus"]
            }>
                <div className="logo"><img src={business} className="logoimg" />SIPI</div>
                <p className="nameChapter">Управление</p>
                <ul>
                    <li className="first">
                        <img src={dshboard} />
                        <a href="#" className="mainpanel">Главная панель</a>
                    </li>
                    <li className="second">
                        <img src={analitics} />
                        <a href="#" className="analitics">Аналитика</a>
                    </li>
                    <li className="three">
                        <img src={bookmark} />
                        <a href="#" className="bookmark">Избранное</a>
                    </li>
                    <li className="four">
                        <img src={briefcase} />
                        <a href="#" className="briefcase">Акции</a>
                    </li>
                </ul>
                <p className="nameChapter">Настройки</p>
                <ul>
                    <li className="first">
                        <img src={user} />
                        <a href="#" className="mainpanel">Профиль</a>
                    </li>
                    <li className="second">
                        <img src={settings} />
                        <a href="#" className="analitics">Настройки</a>
                    </li>
                </ul>
                <img src={sun} className="sun" />
                <div class="switch-btn switch-on"></div>
                <img src={moon} className="moon" />
            </div>
        </div>
    );
}
 
export default Navbar;