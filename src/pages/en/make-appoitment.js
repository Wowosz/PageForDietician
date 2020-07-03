import React from "react"
import Layout from "../../components/layoutEn"
import SEO from "../../components/seo"
import "../../styles/mainStyle.css"
import "../../styles/icofont/icofont.css";
import "../../styles/telephone/telephone.css"

const MakeAppoitment = () => (
    <Layout>
        <div className="row my-3"></div>
        <div className="row justify-content-center">
            <h3 className="mainBackground text-white py-2 px-5 mt-4 makeAppoitment rounded"><i className="px-5">Make Appointment</i></h3>
        </div>
        <div className="row mt-1 justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-5 col-8 consulationMethod mt-3 py-5 mx-lg-5 mx-md-4 mx-sm-3 mb-3">
                <h2 className="text-center mb-5"><i className="rounded border border-secondary p-2 shadow">Call us</i></h2>
                <h4 className="mt-2 mb-5 text-center consultationDescription"><i class="icofont-smart-phone"/>509 702 011</h4>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-5 col-8 consulationMethod mt-3 py-5 mx-lg-5 mx-md-4 mx-sm-3 mb-3">
                <h3 className="text-center mb-5"><i className="rounded border border-secondary p-2 shadow">Mail us</i></h3>
                <a href="mailto:kontakt@ewafilip.pl"><h4 className="mt-2 mb-5 text-center consultationDescription"><i class="icofont-email"/>kontakt@ewafilip.pl</h4></a>
            </div>
        </div>
        <div className="row my-5"></div>
        <div className="row justify-content-center">
            <h3 className="mainBackground text-white py-2 px-5 mt-4 makeAppoitment rounded"><i className="px-5">Online Reservation</i></h3>
        </div>
        <div className="row mt-3 justify-content-center">
            <div className="col-10">
                <iframe title="Register Window"width="100%" height="1000px" src="http://www-ewafilip-pl.filesusr.com/html/a7f3f6_08dacc2afc038d3a7ebd22d05b6271a5.html"></iframe>
            </div>
        </div>
    </Layout>
);

export default MakeAppoitment;