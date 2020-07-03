import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/mainStyle.css"

const Cennik = () => (
    <Layout>
        <div className="row justify-content-center">
            <h3 className="mainBackground text-white p-2 mt-4 consultations shadow-lg">Konsultacje Online</h3>
        </div>
        <div className="row mt-3 justify-content-around">
            <div className="col-2 consulationMethod shadow p-5">
                <h2 className="text-center mt-2">Skype</h2>
                <p className="mt-2 text-center">Rozmowa audio/wideo poprzedzona przesłaniem  kwestionariusza</p>
            </div>
            <div className="col-2 consulationMethod shadow p-5">
                <h2 className="text-center mt-2">Skype</h2>
                <p className="mt-2 text-center">Rozmowa audio/wideo poprzedzona przesłaniem  kwestionariusza</p>
            </div>
            <div className="col-2 consulationMethod shadow p-5">
                <h2 className="text-center mt-2">Skype</h2>
                <p className="mt-2 text-center">Rozmowa audio/wideo poprzedzona przesłaniem  kwestionariusza</p>
            </div>

        </div>

    </Layout>
);

export default Cennik;
