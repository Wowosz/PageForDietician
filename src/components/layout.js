import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../styles/header.css";
import "../styles/icofont/icofont.css";
import Menu from "./menu";


export default function Layout({ children }) {
  return (
    <div className="fluid-container">
        <header className="">
            <div className="row justify-content-center">
                <AniLink className="col-12 col-md-8 col-sm-12 col-lg-6" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/">
                    <img className="col-12"src="https://static.wixstatic.com/media/a7f3f6_47f785a93ad340a4811da9f1fe69ae36~mv2.png/v1/fill/w_486,h_162,al_c,q_85,usm_0.66_1.00_0.01/Baner%25201_edited.webp" alt="banner"></img>
                </AniLink>
            </div>
        </header>
        <Menu/>
        {children}
        <footer>
            <div className="row footer p-4 mt-4">
                <div className="col-8 text-white display-4">
                    <h2><a href="mailto:kontakt@ewafilip.pl" className="text-decoration-none text-white"><i class="icofont-email"></i>kontakt@ewafilip.pl</a></h2>
                    <h2><i class="icofont-smart-phone"></i>509 702 011</h2>
                </div>
                </div>
            <div className="row justify-content-center footer">
                <div className="col-6">
                    <p className="text-center text-white">Copyright © 2020. All rights reserved.</p>
                    <p className="text-center text-white">Created by <a className="text-white" href="https://www.linkedin.com/in/wojciech-szoda-0108811a9/">Wojciech Szoda</a></p>
                </div>
            </div>
        </footer>
    </div>
  );
}