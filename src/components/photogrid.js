import React from "react"

// React-bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Slick carousel theme
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// React-slick
import Slider from "react-slick"

// Styles
import photogridStyles from "./photogrid.module.css"
import "./adjust-dots.css"

// Assets
import IT from "../components/images/IT.jpeg"
import all_soc from "../components/images/all-soc.jpeg"
import heads from "../components/images/heads.jpeg"
import public_relations from "../components/images/public-relations.jpeg"
import welfare from "../components/images/welfare.jpeg"

class PhotoGrid extends React.Component {
  render() {
    const settings = {
      speed: 500,
      autoplay: true,
      adaptiveHeight: true,
      // Adaptive height property super important - prevents big ugly margin below carousel
      autoPlaySpeed: 30,
      swipeToSlide: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      pauseOnHover: true,
    }

    return (
      <section className="section">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="section-title">사진</h2>
            </Col>

            <Col xs={12}>
              <Slider {...settings}>
                <div>
                  <img
                    src={IT}
                    height="400px"
                    className={`mx-auto ${photogridStyles.carouselImg}`}
                  ></img>
                </div>
                <div>
                  <img
                    src={all_soc}
                    height="400px"
                    className={`mx-auto ${photogridStyles.carouselImg}`}
                  ></img>
                </div>
                <div>
                  <img
                    src={heads}
                    height="400px"
                    className={`mx-auto ${photogridStyles.carouselImg}`}
                  ></img>
                </div>
                <div>
                  <img
                    src={public_relations}
                    height="400px"
                    className={`mx-auto ${photogridStyles.carouselImg}`}
                  ></img>
                </div>
                <div>
                  <img
                    src={welfare}
                    height="400px"
                    className={`mx-auto ${photogridStyles.carouselImg}`}
                  ></img>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
export default PhotoGrid