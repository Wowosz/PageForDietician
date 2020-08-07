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
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/en">
                        Home
                    </AniLink>
                    <AniLink className="px-3 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/en/about/">
                        About Me
                    </AniLink>
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/en/prices/">
                        Online Consultation
                    </AniLink>
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/en/make-appoitment/">
                        Appointments
                    </AniLink>
                <div className="language">
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/">
                        PL
                    </AniLink>
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/en">
                        ENG
                    </AniLink>
                </div>
                </div>
            </div>
        );
    }
};

export default Menu;