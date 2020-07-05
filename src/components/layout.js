import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../styles/header.css";
import "../styles/icofont/icofont.css";


export default function Layout({ children }) {
  return (
    <div className="fluid-container">
        <header className="">
            <div className="row justify-content-center">
                <AniLink className="col-12 col-md-8 col-sm-12 col-lg-6" paintDrip to="/">
                    <img className="col-12"src="https://static.wixstatic.com/media/a7f3f6_47f785a93ad340a4811da9f1fe69ae36~mv2.png/v1/fill/w_486,h_162,al_c,q_85,usm_0.66_1.00_0.01/Baner%25201_edited.webp" alt="banner"></img>
                </AniLink>
            </div>
        </header>
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
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/umow-sie/">
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