import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/mainStyle.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage({data}) {
  console.log(data.allMarkdownRemark)
  return (
    <Layout>
      <SEO title="Home" />


      <div className="row with-image">
        <div className="bg vw-100 row justify-content-center ml-1">
          <h1 className="title p-2">Nie marnuj życia!</h1>
          <h1 className="imgButton p-3"><a href="/umow-sie/" className="text-decoration-none link">Umów się!</a></h1>
        </div>
      </div>
      <div id="obszary">
      <div className="row justify-content-center navi mb-4">
        <h2 className="m-0 py-4 text-white font">Obszary Działania</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
          <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_c14cb9fe55244796b3efb8c3ff10639e~mv2.png/v1/crop/x_50,y_0,w_412,h_512/fill/w_103,h_128,al_c,q_85,usm_0.66_1.00_0.01/mother%20(2).webp"></img>
          <h4 className="text-center p-4 bg-white text-break font h-50 align-middle">Kobiety w ciąży</h4>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
          <img className="mx-auto d-block mb-5"src="https://static.wixstatic.com/media/a7f3f6_ac528464368140638a4191062780186b~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/thyroid.webp"></img>
          <h4 className="text-center p-4 bg-white text-break font h-50">Zaburzena funkcji tarczycy</h4>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
          <img className="mx-auto d-block mb-5"src="https://static.wixstatic.com/media/a7f3f6_1659c5ab5c6148d3b3bb883c4577ffeb~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/slim-down.webp"></img>
          <h3 className="text-center p-4 bg-white text-break font h-50">Redukcja masy ciała</h3>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
          <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_47ed55e6e20e49459fc325c8bd142f5c~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/bacteria.webp"></img>
          <h3 className="text-center p-4 bg-white text-break font">Choroby autoimmunologiczne</h3>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
          <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_8ff8a677bd5e4d0e9aaef066e907c60a~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/sugar.webp"></img>
          <h3 className="text-center p-4 bg-white text-break font">Insulinooporność Cukrzyca</h3>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
          <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_57f0970cbb3d4f5ebc940eec4789c4af~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/stomach.webp"></img>
          <h3 className="text-center p-4 bg-white text-break font h-50">Zaburzena funkcji przewodu pokarmowego</h3>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
          <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_f6215238371247d785952defa997d198~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/uterus.webp"></img>
          <h3 className="text-center p-4 bg-white font h-50">Zespół policystycznych jajników</h3>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
          <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_e6d4e160899f49fc89f0868657276d93~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/health.webp"></img>
          <h3 className=" text-center p-4 bg-white text-break font h-50">Zdrowy styl życia</h3>
        </div>
      </div>
      </div>
    </Layout>
  )
}

