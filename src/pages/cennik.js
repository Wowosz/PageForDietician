import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/mainStyle.css"

const Cennik = () => (
    <Layout>
        <div className="row my-3"></div>
        <div className="row justify-content-center">
            <h3 className="mainBackground text-white py-1 px-4 mt-4 consultations"><i>Konsultacje Online</i></h3>
        </div>
        <div className="row mt-3 justify-content-around">
            <div className="col-lg-3 col-md-3 col-sm-5 col-8 consulationMethod mt-5 py-5">
                <h2 className="text-center mb-5">Skype</h2>
                <p className="mt-2 mb-5 text-center consultationDescription">Rozmowa audio/wideo poprzedzona przesłaniem  kwestionariusza</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-5 col-8 consulationMethod mt-5 py-5">
                <h3 className="text-center mb-4">Konsultacja <br></br>mailowa</h3>
                <p className="mt-2 mb-5 text-center consultationDescription">Po otrzymaniu kwestionariusza cała konsultacja odbywa się drogą mailową </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-5 col-8 consulationMethod mt-5 py-5">
                <h2 className="text-center mb-5">Messenger</h2>
                <p className="mt-2 mb-5 text-center consultationDescription">Rozmowa audio/wideo poprzedzona przesłaniem  kwestionariusza</p>
            </div>
        </div>
        <div className="row my-5"></div>
        <div className="row justify-content-center">
            <h3 className="mainBackground text-white py-1 px-4 mt-4 consultations"><i>Cennik</i></h3>
        </div>

        <div className="row mt-3 justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-4 col-8 consulationMethod mr-sm-5 mr-md-5 mr-lg-5 mt-5 py-5">
                <h2 className="text-center mb-5">Pierwsza konsultacja <br></br>ok. 60 min</h2>
                <h3 className="mt-2 mb-5 text-center consultationDescription">119 zł</h3>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-8 consulationMethod ml-sm-5 ml-md-5 ml-lg-5 mt-5 py-5">
                <h3 className="text-center mb-5">Konsultacja kontrolna<br></br>ok. 30 min</h3>
                <h3 className="mt-2 mb-5 text-center consultationDescription">79 zł</h3>
            </div>
        </div>

        <div className="row mt-3 justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-4 col-8 consulationMethod mr-sm-5 mr-md-5 mr-lg-5 mt-5 py-5">
                <h2 className="text-center mb-5">Indywidualny jadłospis 7 dni</h2>
                <h3 className="mt-2 mb-5 text-center consultationDescription">99 zł</h3>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-8 consulationMethod ml-sm-5 ml-md-5 ml-lg-5 mt-5 py-5">
                <h2 className="text-center mb-5">Indywidualny jadłospis 14 dni</h2>
                <h3 className="mt-2 mb-5 text-center consultationDescription">199 zł</h3>
            </div>
        </div>
        <div className="row my-5"></div>
    </Layout>
);

export default Cennik;
