import React from "react"

// Components
import HeaderFooter from "../components/header-footer"
import NukaPhotoGrid from "../components/nuka-photo-grid"

// Styles
import indexStyles from "./index.module.css"

// React-bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

// Assets
import twitter from "../components/images/twitter.svg"
import facebook from "../components/images/facebook.svg"
import instagram from "../components/images/instagram.svg"
import medal from "../components/images/medall.svg"
import basketball from "../components/images/basketball.svg"
import camera from "../components/images/camera.svg"
import community from "../components/images/community.png"
import heart from "../components/images/heart.svg"
import talk from "../components/images/talk.svg"
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

        {/* The below is there to maintain the height */}
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
      {/* Hero area */}

      {/* Introduction */}
      {/* Might be good to write sth here for future batches */}
      {/* <section className="section">
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
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* Introduction */}

      {/* History */}
      {/* Same thing here - might be able to convince future society president to write something here */}
      {/* <section className="section position-relative">
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
      </section> */}
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
                  <img className="mb-5 d-inline-block" width="50" src={community} />
                  <h4 className="mb-4">교류활동</h4>
                  <p>
                    신입생환영회, 개강/종강파티, 문화교류, 캠퍼스투어
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
                    src={heart}
                  />
                  <h4 className="mb-4">봉사활동</h4>
                  <p>
                    한인사회 봉사, 지역사회 봉사
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
                    src={talk}
                  />
                  <h4 className="mb-4">토크/이벤트 기획</h4>
                  <p>
                    명사 초청 강연, 기업 취업 설명회, 투표 독려 이벤트, 시험기간 Welfare Pack
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* <img
          className='img-fluid w-100 edu-bg-image'
          src={educatin_bg}
          alt="bg-image"
        /> */}
        {/* The above will push elements down when the screen gets big (Desktop) and a weird double scrollbar error will appear*/}
      </section>
      {/* Activities */}

      {/* Pictures */}
      <NukaPhotoGrid/>
      {/* Pictures */}
    </HeaderFooter>
  </div>
)
