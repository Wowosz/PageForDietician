import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../styles/header.css";
import "../styles/icofont/icofont.css";

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {opened: false}
    };

    render(){
        return(
            <div>
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
        );
    }
};

export default Menu;