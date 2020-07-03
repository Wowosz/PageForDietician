import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../styles/header.css";
import "../styles/icofont/icofont.css";
import "../styles/telephone/telephone.css"


export default function LayoutEN({ children }) {
  return (
    <div className="fluid-container">
        <header className="">
            <div className="row justify-content-center">
                <AniLink className="col-12 col-md-8 col-sm-12 col-lg-6" paintDrip to="/">
                    <img className="col-12"src="https://static.wixstatic.com/media/a7f3f6_47f785a93ad340a4811da9f1fe69ae36~mv2.png/v1/fill/w_486,h_162,al_c,q_85,usm_0.66_1.00_0.01/Baner%25201_edited.webp" alt="banner"></img>
                </AniLink>
            </div>
        </header>
            <div className="">
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
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/en/make-appoitment/">
                        Blog
                    </AniLink>
                <div className="language">
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/">
                        PL
                    </AniLink>
                    <AniLink className="px-2 py-3 text-decoration-none text-white" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/">
                        ENG
                    </AniLink>
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
        </footer>
    </div>
  );
}