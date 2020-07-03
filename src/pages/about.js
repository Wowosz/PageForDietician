import React from "react"
import { Link } from "gatsby"
import "../styles/mainStyle.css"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
        <SEO title="O Mnie"/>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-7 col-10 col-sm-10 col-md-6 pr-0">
                    <div className="mainBackground pt-3 pb-2 text-white">
                        <p className="text-center mb-0 name">Ewa Filip</p>
                        <p className="text-center mt-1 name">Dietetyk kliniczny</p>
                    </div>
                    <p className="text-justify about p-2 mr-0">
                    &emsp;&emsp;Jestem Dietetykiem oraz Technikiem żywienia. Dietetyka jest mi bliska od niemal 10 lat. Przez te lata nieustannie poszerzam swoją wiedzę kończąc kolejne szkolenia, śledząc badania naukowe oraz zdobywając doświadczenie w pracy z pajetami.<br/>
                    &emsp;&emsp;Uważam, że kluczem do sukcesu każdego mojego pacjenta jest indywidualne dobrany plan żywieniowy, który uwzględnia  występujące jednostki chorobowe oraz jest dopasowany do stylu życia danej osoby.<br/>
                    &emsp;&emsp;Zawszę patrzę na człowieka jak na system naczyń połączonych tworzących integralną całość, szukam przyczyny jego problemów i związków między występującymi schorzeniami, dlatego przed wdrożeniem postępowania żywieniowego przeprowadzam szeroki wywiad dotyczący nie tylko sposobu dotychczasowego odżywiania i stanu zdrowia, ale także stylu życia. W oparciu o wywiad zlecam niezbędne badania.<br/>
                    &emsp;&emsp;Kładę duży nacisk na to by dieta, którą układam była nie tylko dopasowana do indywidualnych potrzeb podyktowanym stanem zdrowia ale także łatwa w stosowaniu (posiłki proste w przygotowaniu z łatwo dostępnych produktów, dopasowanie do indywidualnych preferencji smakowych). Dzięki temu stosowanie diety przestaje być pasmem ciągłych ograniczeń, a staje się trwałą zmianą stylu życia, która daje trwałą poprawę stanu zdrowia.
                    </p>
                </div>
                <div className="col-lg-5 col-10 col-sm-10 col-md-6 ml-md-0 pl-md-0 ml-lg-0 pl-lg-0">
                    <img className="borderIMG"alt="My Face" src="https://static.wixstatic.com/media/a7f3f6_f8828af640054cc282f7395c6aabb2d2~mv2.jpg/v1/crop/x_67,y_0,w_395,h_530/fill/w_332,h_450,al_c,q_80,usm_0.66_1.00_0.01/114fab498162773d711df0dbc734e49c_large_j.webp"></img>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-4 col-sm-5 col-md-4 mt-2">
                            <AniLink duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/umow-sie/">
                                <button className="mainBackground text-white p-2 border-0 buttonUmow">Umów się</button>
                            </AniLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default About
