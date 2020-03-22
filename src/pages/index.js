import React from "react"

// Components
import HeaderFooter from "../components/header-footer"
import PhotoGrid from "../components/photogrid"

// Styles
import indexStyles from "./index.module.css"
import headerFooterStyles from "../components/header-footer.module.css"

// React-bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

// Assets
import twitter from "../components/images/twitter.svg"
import facebook from "../components/images/facebook.svg"
import instagram from "../components/images/instagram.svg"
import modified_logo from "../components/images/korea-society-logo-modified.jpg"
import medal from "../components/images/medall.svg"
import basketball from "../components/images/basketball.svg"
import camera from "../components/images/camera.svg"
import educatin_bg from "../components/images/education-bg.png"

export default () => (
  <div>
    <HeaderFooter>
      {/* Hero area */}

      <section className={`${indexStyles.heroArea} section page-title position-relative`}>
        <div className={indexStyles.overlay}></div>
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h1 className={`${indexStyles.h1Styles} text-white`}>NUS 한인회</h1>
            </Col>
          </Row>
        </Container>

        <ul className="ml-5 mt-5 list-unstyled">
          <li className="mb-3">
            <a href="https://www.facebook.com/groups/258391824278076/">
              <img alt="facebook" src={facebook} />
            </a>
          </li>
          <li className="mb-3">
            <a href="https://www.instagram.com/nus__ks/">
              <img alt="instagram" src={instagram} />
            </a>
          </li>
          <li className="mb-3">
            <a href="#">
              <img alt="twitter" src={twitter} />
            </a>
          </li>
        </ul>
        <img
          className='img-fluid w-100 edu-bg-image'
          src={educatin_bg}
          alt="bg-image"
        />
      </section>

      {/* <section
        className={`${indexStyles.heroArea} bg-white px-5 position-relative`}
      >
        <Container>
          <Row>
            <Col md={12} className="d-flex justify-content-center align-items-center">
              <h1>
                NUS
                <br />
                한인회
              </h1>
            </Col>
            <Col md={6} className="d-none d-md-flex justify-content-end">
              <img
                alt="korean society lion"
                width="400"
                src={modified_logo}
              ></img>
            </Col>
          </Row>
        </Container>
        
        <img
          className='img-fluid w-100 edu-bg-image'
          src={educatin_bg}
          alt="bg-image"
        />
      </section> */}
      {/* Hero area */}

      {/* Introduction */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="section-title">인사말</h2>
            </Col>

            <Col lg={10} className="mx-auto text-center">
              <p className="font-secondary paragraph-lg text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              {/* <a href="about.html" class="btn btn-transparent">more</a> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/* Introduction */}

      {/* History */}
      <section className="section position-relative">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="section-title">역사</h2>
            </Col>
            <Col lg={6} md={6} className={indexStyles.mb80}>
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <img
                    className="shadow d-block rounded-circle bg-white p-3"
                    width="100"
                    src={medal}
                  />
                </div>
                <div>
                  <p className="text-dark mb-1">2006</p>
                  <h4>Marters in UX Design</h4>
                  <p className="mb-0 text-muted">
                    Masassusets Institute of Technology
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} className={indexStyles.mb80}>
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <img
                    className="shadow d-block rounded-circle bg-white p-3"
                    width="100"
                    src={medal}
                  />
                </div>
                <div>
                  <p className="text-dark mb-1">2004</p>
                  <h4>Honours in Fine Arts</h4>
                  <p className="mb-0 text-muted">Harvard University</p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} className={indexStyles.mb80}>
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <img
                    className="shadow d-block rounded-circle bg-white p-3"
                    width="100"
                    src={medal}
                  />
                </div>
                <div>
                  <p className="text-dark mb-1">2006</p>
                  <h4>Marters in UX Design</h4>
                  <p className="mb-0 text-muted">
                    Masassusets Institute of Technology
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} className={indexStyles.mb80}>
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <img
                    className="shadow d-block rounded-circle bg-white p-3"
                    width="100"
                    src={medal}
                  />
                </div>
                <div>
                  <p className="text-dark mb-1">2004</p>
                  <h4>Honours in Fine Arts</h4>
                  <p className="mb-0 text-muted">Harvard University</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          className='img-fluid w-100 edu-bg-image'
          src={educatin_bg}
          alt="bg-image"
        />
      </section>
      {/* History */}

      {/* Activities */}
      <section className="section position-relative">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="section-title">활동</h2>
            </Col>

            <Col md={4} className="mb-4 mb-md-0">
              <Card className={`${indexStyles.hoverShadow} shadow`}>
                <Card.Body className="text-center px-4 py-5">
                  <img className="mb-5 d-inline-block" width="50" src={medal} />
                  <h4 className="mb-4">술</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4 mb-md-0">
              <Card className={`${indexStyles.hoverShadow} shadow`}>
                <Card.Body className="text-center px-4 py-5">
                  <img
                    className="mb-5 d-inline-block"
                    width="50"
                    src={camera}
                  />
                  <h4 className="mb-4">활동</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4 mb-md-0">
              <Card className={`${indexStyles.hoverShadow} shadow`}>
                <Card.Body className="text-center px-4 py-5">
                  <img
                    className="mb-5 d-inline-block"
                    width="50"
                    src={basketball}
                  />
                  <h4 className="mb-4">운동</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <img
          className='img-fluid w-100 edu-bg-image'
          src={educatin_bg}
          alt="bg-image"
        />
      </section>
      {/* Activities */}

      {/* Pictures */}
      <PhotoGrid />
      {/* Pictures */}
    </HeaderFooter>
  </div>
)
