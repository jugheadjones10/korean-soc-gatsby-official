import React from "react"

// Styles (universal styles to be passed to all children components)
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

// Component-specific style
import headFootStyles from "./header-footer.module.css"

// React-bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Assets
import logo from "./images/korea-society-logo.jpg"

class HeaderFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { navigationClass: headFootStyles.navigation }
    this.handleScroll = this.handleScroll.bind(this)
    console.log("FUCK")
  }

  handleScroll() {
    console.log(window.pageYOffset)

    if (window.pageYOffset > 100) {
      this.setState({
        navigationClass: headFootStyles.navigationScrolled
      })
    }else{
      this.setState({
        navigationClass: headFootStyles.navigation
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div>
        <header className={`${this.state.navigationClass} fixed-top`}>
          <Navbar collapseOnSelect expand="md">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="50"
                height="50"
                alt="NUS Korean Society logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end text-center">
              <Nav activeKey="#home">
                <Nav.Item>
                  <Nav.Link className={headFootStyles.navLink} href="#home">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className={headFootStyles.navLink}
                    href="#about-society"
                  >
                    한인회 소개
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className={headFootStyles.navLink}
                    href="#about-school"
                  >
                    학교 소개
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={headFootStyles.navLink} href="#contact">
                    연락
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>

        {this.props.children}

        <footer className={headFootStyles.bgDark}>
          <div className="section">
            <Container>
              <Row>
                <Col md={4}>
                  <h5 className="text-secondary d-flex justify-content-center">
                    Email
                  </h5>
                  <p className="text-white paragraph-lg font-secondary d-flex justify-content-center">
                    steve.fruits@email.com
                  </p>
                </Col>
                <Col md={4}>
                  <h5 className="text-secondary d-flex justify-content-center">
                    Phone
                  </h5>
                  <p className="text-white paragraph-lg font-secondary d-flex justify-content-center">
                    +880 2544 658 256
                  </p>
                </Col>
                <Col md={4}>
                  <h5 className="text-secondary d-flex justify-content-center">
                    Address
                  </h5>
                  <p className="text-white paragraph-lg font-secondary d-flex justify-content-center text-center">
                    21 Lower Kent Ridge Rd, Singapore 119077
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      </div>
    )
  }
}
export default HeaderFooter