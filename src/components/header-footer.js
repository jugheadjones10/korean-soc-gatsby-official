import React from "react"

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
import nuslogo from "./images/nus-logo-keyline-horizonal.jpg"
import facebook from "../components/images/facebook.svg"
import instagram from "../components/images/instagram.svg"

// Gatsby
import { Link } from "gatsby"

//Helmet
import Helmet from "react-helmet"

class HeaderFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { navigationClass: headFootStyles.navigation }
    this.handleScroll = this.handleScroll.bind(this)
    this.onForumSelected = this.onForumSelected.bind(this)
  }

  handleScroll() {
    
    if (window.pageYOffset > 80) {

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

  onForumSelected(){
    window.open("https://nuskoreasociety.org/forum");
  }

  render() {
    return (
      <div>
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Helmet>

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

            <Navbar.Brand href="#home" className={headFootStyles.nusLogo}>
              <img
                src={nuslogo}
                height="50"
                alt="NUS Korean Society logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end text-center">
              <Nav activeKey="#home">
                <Nav.Item>
                  <Nav.Link href="#home" className={headFootStyles.navLink}>
                    <Link to="/" className={headFootStyles.nestedLink}>
                      Home
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className={headFootStyles.navLink}
                    href="#about-society"
                  >
                    <Link to="/members/" className={headFootStyles.nestedLink}>
                      한인회 소개
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className={headFootStyles.navLink}
                    href="#about-school"
                  >
                    <Link to="/school/" className={headFootStyles.nestedLink}>
                      학교 소개
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className={headFootStyles.navLink}
                    href="#forum"
                    onSelect={this.onForumSelected}
                  >
                    <span className={headFootStyles.nestedLink}>
                      게시판
                    </span>
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
                    Social
                  </h5>
                  <p className="text-white paragraph-lg d-flex justify-content-center">
                    <ul className={`list-unstyled ${headFootStyles.socialMedia}`}>
                      <li className="mr-3 ml-3">
                        <a href="https://www.facebook.com/groups/258391824278076/" target="_blank">
                          <img alt="facebook" src={facebook} />
                        </a>
                      </li>
                      <li className="mr-3 ml-3">
                        <a href="https://www.instagram.com/nus__ks/" target="_blank">
                          <img alt="instagram" src={instagram} />
                        </a>
                      </li>
                    </ul>
                  </p>
                </Col>
                <Col md={4}>
                  <h5 className="text-secondary d-flex justify-content-center">
                    Email
                  </h5>
                  <p className="text-white paragraph-lg d-flex justify-content-center">
                    nuskusa@gmail.com
                  </p>
                </Col>
                {/* <Col md={3}>
                  <h5 className="text-secondary d-flex justify-content-center">
                    Phone
                  </h5>
                  <p className="text-white paragraph-lg d-flex justify-content-center">
                    +880 2544 658 256
                  </p>
                </Col> */}
                <Col md={4}>
                  <h5 className="text-secondary d-flex justify-content-center">
                    Address
                  </h5>
                  <p className="text-white paragraph-lg d-flex justify-content-center text-center">
                    21 Lower Kent Ridge Rd <br/> Singapore 119077
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