import React from "react"

// Components
import HeaderFooter from "../components/header-footer"
import TeamSection from "../components/team-section"

// Styles
import memberStyles from "./members.module.css"

// React-bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Assets
import prez from "../components/images/korean-soc-prez.jpg"
import IT from "../components/images/IT.jpeg"
import heads from "../components/images/heads-2.jpeg"
import public_relations from "../components/images/public-relations-2.jpeg"
import welfare from "../components/images/welfare-2.jpeg"
import educatin_bg from "../components/images/education-bg.png"

class Members extends React.Component {
  constructor(props) {
    super(props)
    this.state = { overlayHeight: 0 }
    this.overlayRef = React.createRef()
    this.onImgLoad = this.onImgLoad.bind(this)
  }

  onImgLoad() {
    this.setState({
      overlayHeight: this.overlayRef.current.clientHeight,
    })
  }

  render() {
    return (
      <HeaderFooter>
        <section class="section page-title position-relative">
          <Container>
            <Row>
              <Col xs={12} className="text-center">
                <h1>한인회 소개</h1>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section pt-5">
          <Container>
            <Row>
              <Col className="text-center" xs={12} lg={8}>
                <p className="paragraph-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="paragraph-lg">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </Col>

              <Col lg={4} className="text-center d-lg-block d-none">
                <div className="position-relative mb-4">
                  <img
                    src={prez}
                    alt="society president"
                    class={`${memberStyles.prezFace} mt-5 mt-lg-0 shadow-lg`}
                  />
                </div>
                <h4>김한결</h4>
                <p className="text-light font-secondary">학부생 회장</p>
              </Col>
            </Row>
          </Container>
          <img
            className="w-100 edu-bg-image"
            src={educatin_bg}
            alt="bg-image"
          />
        </section>

        <section
          className="section bg-cover"
          data-background="images/backgrounds/team-bg.png"
        >
          <TeamSection
            title="임원진"
            first="김한결"
            firstRole="학부생 회장"
            second="한혜린"
            secondRole="총무"
            img={heads}
          />
        </section>

        <section
          className="section bg-cover position-relative"
          data-background="images/backgrounds/team-bg.png"
        >
          <TeamSection
            title="Public Relations"
            first="이청우"
            firstRole="부장"
            second="이새해"
            secondRole="차장"
            img={public_relations}
          />
          <img
            className="img-fluid w-100 edu-bg-image"
            src={educatin_bg}
            alt="bg-image"
          />
        </section>

        <section
          className="section bg-cover"
          data-background="images/backgrounds/team-bg.png"
        >
          <TeamSection
            title="Student Affairs"
            first="박수연"
            firstRole="차장"
            second="박진아"
            secondRole="부장"
            img={welfare}
          />
        </section>

        <section
          className="section bg-cover position-relative"
          data-background="images/backgrounds/team-bg.png"
        >
          <TeamSection
            title="IT"
            first="김영진"
            firstRole="차장"
            second="민경호"
            secondRole="부장"
            img={IT}
          />
        </section>
      </HeaderFooter>
    )
  }
}
export default Members
