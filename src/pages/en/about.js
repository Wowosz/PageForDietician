import React from "react"
import { Link } from "gatsby"
import "../../styles/mainStyle.css"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import LayoutEN from "../../components/layoutEn"
import SEO from "../../components/seo"

const About = () => (
  <LayoutEN>
        <SEO title="O Mnie"/>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-7 col-10 col-sm-10 col-md-6 pr-0">
                    <div className="mainBackground pt-3 pb-2 text-white">
                        <p className="text-center mb-0 name">Ewa Filip</p>
                        <p className="text-center mt-1 name">Nourishment Technician</p>
                    </div>
                    <p className="text-justify about p-2 mr-0">
                    &emsp;&emsp;I'm a Nutritionist and Nourishment technician. I'm related to dietetics for about 10 years. Trough these 10 years I've been constantly expanding my knowledge finishing more and more courses keeping up with scientific research and gaining experience in working with patients.<br/>
                    &emsp;&emsp;I think that the key to the success of each one of my patients is individually matched nutritional plan which takes into account a person's illnesses and lifestyle.<br/>
                    &emsp;&emsp;I see people as communicating vessels creating an integral whole. I'm looking for the reasons for his problems and connections through illnesses. That's why before any nutritional procedures take place I'm conducting extensive interviews about not only hitherto nutritional habits and medical conditions but also the lifestyle. I state the necessary examination based on this interview.<br/>
                    &emsp;&emsp;I'm putting high pressure not only on making my diet plan compatible with each of my patient habits and medical condition but also easy to apply (meals easy to make from easily accessible ingredients matched with taste preferences). Thanks to all that keeping up with my diets is no longer a band of restrictions but a permanent change to a patient's lifestyle, which grants lasting improvement in medical condition.
                    </p>
                </div>
                <div className="col-lg-5 col-10 col-sm-10 col-md-6 ml-md-0 pl-md-0 ml-lg-0 pl-lg-0">
                    <img className="borderIMG"alt="My Face" src="https://static.wixstatic.com/media/a7f3f6_f8828af640054cc282f7395c6aabb2d2~mv2.jpg/v1/crop/x_67,y_0,w_395,h_530/fill/w_332,h_450,al_c,q_80,usm_0.66_1.00_0.01/114fab498162773d711df0dbc734e49c_large_j.webp"></img>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-4 col-sm-5 col-md-4 mt-2">
                            <AniLink duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to="/en/make-appoitment/">
                                <button className="mainBackground text-white p-2 border-0 buttonUmow">Make an Appointment</button>
                            </AniLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LayoutEN>
)

export default About
