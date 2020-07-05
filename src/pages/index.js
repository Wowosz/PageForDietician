import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from "react-bootstrap"
import Image1 from "../images/brooke-lark-M4E7X3z80PQ-unsplash.jpg"
import "../styles/mainStyle.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <Carousel className="carousel-inner">
        <Carousel.Item className="carousel-inner">
          <img
            className="d-block w-100 carousel-inner"
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="position-aboslute h-100 captionbg"></div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="row mt-5 justify-content-center navi mb-4">
      <h2 className="m-0 py-4 text-white font">Obszary Działania</h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
        <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_c14cb9fe55244796b3efb8c3ff10639e~mv2.png/v1/crop/x_50,y_0,w_412,h_512/fill/w_103,h_128,al_c,q_85,usm_0.66_1.00_0.01/mother%20(2).webp"></img>
        <h4 className="text-center p-4 bg-white font h-50 align-middle">Kobiety w ciąży</h4>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
        <img className="mx-auto d-block mb-5"src="https://static.wixstatic.com/media/a7f3f6_ac528464368140638a4191062780186b~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/thyroid.webp"></img>
        <h4 className="text-center p-4 bg-white font h-50">Zaburzena funkcji tarczycy</h4>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
        <img className="mx-auto d-block mb-5"src="https://static.wixstatic.com/media/a7f3f6_1659c5ab5c6148d3b3bb883c4577ffeb~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/slim-down.webp"></img>
        <h3 className="text-center p-4 bg-white font h-50">Redukcja masy ciała</h3>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
        <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_47ed55e6e20e49459fc325c8bd142f5c~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/bacteria.webp"></img>
        <h3 className="text-center p-4 bg-white font">Choroby autoimmunologiczne</h3>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
        <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_8ff8a677bd5e4d0e9aaef066e907c60a~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/sugar.webp"></img>
        <h3 className="text-center p-4 bg-white font">Insulinooporność Cukrzyca</h3>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
        <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_57f0970cbb3d4f5ebc940eec4789c4af~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/stomach.webp"></img>
        <h3 className="text-center p-4 bg-white font h-50">Zaburzena funkcji przewodu pokarmowego</h3>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
        <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_f6215238371247d785952defa997d198~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/uterus.webp"></img>
        <h3 className="text-center p-4 bg-white font h-50">Zespół policystycznych jajników</h3>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-5 col-8 mainBackground p-4 justify-content-center p-5 mr-3 mb-3">
        <img className="mx-auto d-block mb-4"src="https://static.wixstatic.com/media/a7f3f6_e6d4e160899f49fc89f0868657276d93~mv2.png/v1/fill/w_103,h_103,al_c,q_85,usm_0.66_1.00_0.01/health.webp"></img>
        <h3 className=" text-center p-4 bg-white font h-50">Zdrowy styl życia</h3>
      </div>
    </div>
  </Layout>
)

export default IndexPage
