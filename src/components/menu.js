import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../styles/header.css";
import "../styles/hamburgerMenu.css"
import "../styles/icofont/icofont.css";

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {opened: false}
    };

    render(){
        return(
            <div>
            <div className="topNaviBar">
                <div className="d-flex navi justify-content-center">
                    
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/">
                        Start
                    </AniLink>
                    <AniLink className="px-3 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/about/">
                        O Mnie
                    </AniLink>
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/cennik/">
                        Konsultacje Online
                    </AniLink>
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/umow-sie/">
                        Umów się
                    </AniLink>
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/blog/">
                        Blog
                    </AniLink>
                <div className="language">
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/">
                        PL
                    </AniLink>
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/en">
                        ENG
                    </AniLink>
                </div>
                <div className="socialMedia p-2">
                    <a className="d-inline-block text-decoration-none text-white" href="https://www.instagram.com/ewafilip_dietetyk/?hl=pl"><h3><i class="icofont-instagram"></i></h3></a>
                    <a className="d-inline-block text-decoration-none text-white pl-1" href="https://www.facebook.com/Ewa-Filip-Dietetyk-100454951498263/?modal=admin_todo_tour"><h3><i class="icofont-facebook"></i></h3></a>
                </div>
                </div>
            </div>

             <div className="hamburgerMenu">
                <div>
                    <div>
                        <button className={this.state.opened === true ? "hamburger hamburger--active" : "hamburger"} onClick={this.handleClick}>
                            <span className="hamburger__box">
                                <span className="hamburger__inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className={this.state.opened === true ? "navigation navigation--active" : "navigation"}>
                    <ul className="navigation__list pb-5 row justify-content-center">
                        <li className="navigation__item pt-5"><a href="">Lorem</a></li>
                        <li className="navigation__item"><a href="">Ipsum</a></li>
                        <li className="navigation__item"><a href="">Dolor</a></li>
                        <li className="navigation__item"><a href="">Sit</a></li>
                    </ul>
                </div>
             </div>
             </div>
        );
    }

    handleClick = () => {
        this.state.opened === false ? this.setState({opened: true}) : this.setState({opened: false});
    }
};

export default Menu;