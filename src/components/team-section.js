import React from "react"

// Styles
import teamSectionStyles from "./team-section.module.css"

// React-bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

class TeamSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { overlayHeight: 0 }
    this.overlayRef = React.createRef()
    this.onImgLoad = this.onImgLoad.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.onImgLoad)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onImgLoad)
  }

  onImgLoad() {
    this.setState({
      overlayHeight: this.overlayRef.current.clientHeight,
    })
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-around">
          <Col xs={12} className="text-center">
            <h2 className="section-title">{this.props.title}</h2>
          </Col>

          <Col lg={6} md={8} xs={10} className="mb-4 mb-md-0">
            <Card className={`text-center ${teamSectionStyles.card}`}>
              <div
                className={`${teamSectionStyles.overlayLeft} d-flex flex-column justify-content-center`}
                style={{ height: this.state.overlayHeight }}
              >
                <h4 className="text-white">{this.props.first}</h4>
                <p className="text-white">{this.props.firstRole}</p>
              </div>

              <div
                className={`${teamSectionStyles.overlayRight} d-flex flex-column justify-content-center`}
                style={{ height: this.state.overlayHeight }}
              >
                <h4 className="text-white">{this.props.second}</h4>
                <p className="text-white">{this.props.secondRole}</p>
              </div>
              <Card.Img
                src={this.props.img}
                className={`${teamSectionStyles.cardImg} shadow-lg`}
                onLoad={this.onImgLoad}
                ref={this.overlayRef}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default TeamSection
