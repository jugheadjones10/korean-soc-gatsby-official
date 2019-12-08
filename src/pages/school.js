import React from "react"

// Components
import HeaderFooter from "../components/header-footer"

// Styles
import schoolStyles from "./school.module.css"
import "./faq-accordion.css"

// React-bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Assets
import educatin_bg from "../components/images/education-bg.png"


// If you have time - add RESPONSIVE faq items unfold animation
class School extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: true }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck() {
    this.setState(prevState => {
      return { checked: !prevState.checked }
    })
  }

  render() {
    return (
      <HeaderFooter>
        <section class='section page-title position-relative'>
          <Container>
            <Row>
              <Col xs={12} className="text-center">
                <h1>학교 소개</h1>
              </Col>
            </Row>
          </Container>
          <img
            className="img-fluid w-100 edu-bg-image"
            src={educatin_bg}
            alt="bg-image"
          />
        </section>

        <section class="section position-relative">
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h2 class="section-title">FAQ</h2>
              </Col>

              <Col lg={12} className="text-center" id="faq-accordion">
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      onChange={this.handleCheck}
                      defaultChecked={this.state.checked}
                    />
                    <i></i>
                    <h4>S/U는 무엇인가요?</h4>
                    <p className="text-left">
                      &nbsp;&nbsp;&nbsp;&nbsp;S/U란 Satisfactory/Unsatisfactory
                      option의 약자로 성적표에 letter grades (A,B,C 등) 가 아닌
                      ‘Satisfactory’ 혹은 ‘Unsatisfactory’로 표시할 수 있는 성적
                      시스템입니다. S/U를 사용하고자 했을 때, 성적이 ‘C’ 이상일
                      경우에만 ‘Satisfactory’로 표시되며 ‘C’ 보다 낮을 경우
                      ‘Unsatisfactory’로 표시됩니다. 첫 두 학기에는 최대 32MCs
                      의 S/U option이 주어집니다. 이 기간내에 사용하지 않은 남은
                      S/U 는 그 다음 학기부터 최대 12MCs 까지만 사용 가능합니다.
                      32MCs 의 S/U 를 반드시 모두 사용하지 않아도 되며 자신의
                      성적에 맞춰 판단하면 됩니다. S/U option은 모든 Level 1000
                      modules 과 pre-requisites 이 없는 Level 2000 modules 에
                      한해서만 적용됩니다. 학기가 끝난 후 성적을 확인할 때 어떤
                      과목에 S/U를 사용할지 자유롭게 결정할 수 있습니다.
                    </p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={this.handleCheck}
                      defaultChecked={this.state.checked}
                    />
                    <i></i>
                    <h4>GE는 무엇인가요?</h4>
                    <p className="text-left">
                      &nbsp;&nbsp;&nbsp;&nbsp;NUS를 졸업하기 위해서는 총 20MCs
                      의 GE(General education) 를 반드시 수강해야 합니다. GE
                      과목들은 총 5개, GEH, GEQ, GER, GES, GET 로 이루어져
                      있으며 각 과목마다 하나의 수업을 수강해야 합니다. 대부분의
                      학생들은 2년 이내에 GE 5개 과목을 모두 수강합니다. *몇몇
                      기숙사에서는 GE 과목들을 대체할 수 있는 수업을 제공하기
                      때문에 이 점은 유의하시기 바랍니다.
                    </p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={this.handleCheck}
                      defaultChecked={this.state.checked}
                    />
                    <i></i>
                    <h4>NUS에는 어떤 기숙사가 있나요?</h4>
                    <p className="text-left">
                      &nbsp;&nbsp;&nbsp;&nbsp;NUS에는 크게 세 종류의 기숙사가
                      있습니다.
                      <br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Halls of Residence 에는 총 7개의
                      Hall이 있습니다. (Eusoff, Kent Ridge, King Edward VII,
                      Raffles, Sheares, Temasek, PGP House). 홀이라고 불리는 이
                      곳들은 싱가포르의 현지 친구들과 소통 할 수 있는 최적의
                      분위기를 갖추고 있습니다. 모든 홀에는 에어컨이 구비되어
                      있지 않습니다. 층마다 공용 화장실이 있습니다. 각 홀마다
                      고유의 문화가 있으며 홀 마다의 Inter-hall games를 통해
                      다른 홀의 친구들과도 쉽게 교류할 수 있습니다. 위치상
                      Sheares와 Kent Ridge, Temasek과 Eusoff, King Edward VII 와
                      PGP House가 가까이 있어 흔히 서로 라이벌 관계라고 불리기도
                      합니다. 홀에 거주하는 친구들은 General Education 수업을
                      신청하고 듣는 것에 대한 우선권이 주어지기도 합니다. 모든
                      홀에는 필수 밀 플랜이 있습니다. 아침과 저녁이 제공되며
                      급식 형태의 밀 플랜입니다.
                      <br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Residential Colleges 에는 총 5개의
                      College가 있습니다. (Tembusu College, College of Alice and
                      Peter Tan, Residential College 4, Ridge View Residential
                      College, Cinnamon College). Ridge View Residential
                      College는 University Hall 옆에 위치하고 있으며 나머지
                      4개의 College는 모두 University Town에 있습니다. 각각의
                      College에는 특별한 프로그램이 있기 때문에 General
                      Education Module을 기숙사 친구들과만 같이 듣습니다. 필수
                      밀 플랜이 있으며 원하는 cuisine을 고를 수 있는 뷔페
                      형식입니다. 에어컨이 있는 방과 없는 방이 나누어져
                      있습니다. 보통 층마다 공용 화장실이 있지만 Suite 형식의
                      방은 4명이 화장실 하나를 사용합니다. University Town에는
                      마트, 편의점, 24시간 카페 등이 위치해 있습니다.
                      <br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Student Residence 에는 Prince
                      George’s Park Residence가 있습니다. Kent Ridge MRT 역과
                      NUS Business School 과 가까운 위치입니다. PGPR에는 총
                      3가지 타입의 방이 있습니다. Type A는 방에 에어컨과
                      화장실이 있고 Type B에는 세면대가 있습니다. Type B와 Type
                      C는 공용 화장실을 사용합니다. Prince George’s Park
                      Residence는 가장 사생활 보호가 잘 되는 많큼 싱가포르 현지
                      친구들과의 교류가 가장 어렵기도 합니다. 필수 밀 플랜이
                      없지만 기숙사 내에 Pine Food와 Foodclique, 두 종류의
                      식당이 있습니다. 또한 Nanyang Mart와 1시까지 문을 여는
                      Supersnack이 있습니다.
                    </p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={this.handleCheck}
                      defaultChecked={this.state.checked}
                    />
                    <i></i>
                    <h4>NUS는 전과가 가능한가요?</h4>
                    <p className="text-left">
                      &nbsp;&nbsp;&nbsp;&nbsp;NUS는 전과가 가능합니다. 단,
                      몇가지 제한 사항이 있습니다. 우선 1학년 1학기를 마치고
                      2학기부터 전과할 경우, 1학기 전에 전과 신청을
                      마쳐야합니다. 이때 NUS를 지원할 때와 똑같이 고등학교 성적,
                      스펙을 넣습니다. NUS 원서와 똑같이 과에 대한 subject
                      pre-requisite은 같습니다. 예를 들어서, IB를 기준으로
                      Faculty of Science로 전과하고자 하는 경우, 대학교 지원할
                      때와 똑같이 고등학교 레벨로 과학 과목 총 두 개를 공부
                      했어야 합니다. 그리고 에세이는 자소서 대신에 전과하고자
                      하는 이유를 적은 에세이를 제출합니다. 전과 결과는 1학기
                      성적이 나오고 며칠 후에 나오게 되는데, 만약에 붙게되면
                      1학기 성적을 아예 없애버릴 것인지 아니면 1학기 성적을
                      들고갈 것인지 물어봅니다. 또한, 전과에 붙더라도 전과를
                      하지 않아도 됩니다. 만약에 1학기 성적을 들고갈 경우, 1학기
                      때 들었던 과목은 모두 Unrestricted Elective (교양)으로
                      간주됩니다. 1학기 성적을 들고가지 않을 경우 남은 학기 동안
                      학기마다 학점을 오버해서 듣거나, 계절학기로 채우거나
                      8학기를 초과해서 다녀서 학점을 채워야합니다.
                      <br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;1학년 1학기를 넘어서 전과하게
                      되면, 고등학교 성적 뿐만이 아니라 대학교 성적도 전과할 때
                      함께 심사됩니다.
                    </p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={this.handleCheck}
                      defaultChecked={this.state.checked}
                    />
                    <i></i>
                    <h4>Tuition Grant에 대해 알려주세요!</h4>
                    <p className="text-left">
                      &nbsp;&nbsp;&nbsp;&nbsp;Tuition Grant는 싱가폴의 국공립
                      대학교에 재학하는 학생들에게 제공되는 싱가폴 국가
                      보조금입니다. 이 제도의 취지는 싱가폴에서 고등교육을 받은
                      인적자원이 교육을 마친 후 싱가폴을 떠나는 것을 방지하기
                      위함입니다. Tuition Grant를 받게 될 경우 1년에 드는 학비는
                      약 SGD $20000 정도로 줄어들며, 이에 따라 과마다 Tuition
                      Grant로 지원되는 금액에는 차이가 있을 수 있습니다.
                      일반적으로 Tuition Grant를 받을 경우 졸업 후 3년간
                      싱가폴에 머물며 일해야 합니다. 본인이 Tuition Grant를 받을
                      수 있는지에 관한 것은 대학교 합격과 함께 오는 Admissions
                      Letter에서 확인할 수 있으며, Tuition Grant와 3년간
                      싱가폴에서 의무적으로 일을 하는 조건에 동의한다면 학기
                      시작 후 10월경 공식적으로 MOE에 Tuition Grant 신청서를
                      제출해야 합니다.
                      <br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;졸업 후 싱가폴 외의 다른 곳에서
                      거주하고 싶은 경우 Tuition Grant를 통해 받은 보조금과 그
                      보조금의 10%에 해당하는 금액의 이자를 지불해야 합니다. 더
                      자세한 사항은 아래 작성한 MOE Tuition Grant 링크를
                      참고해주시기 바랍니다.
                      <br />
                      <br />
                      <a href="https://tgonline.moe.gov.sg/tgis/normal/studentViewTuitionGrantSubsidyInfo.action">
                        https://tgonline.moe.gov.sg/tgis/normal/studentViewTuitionGrantSubsidyInfo.action
                      </a>
                    </p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={this.handleCheck}
                      defaultChecked={this.state.checked}
                    />
                    <i></i>
                    <h4>
                      수강 신청을 취소하고 싶어요. /지금 듣는 모듈을
                      드랍(drop)하고 싶어요.
                    </h4>
                    <p className="text-left">
                      &nbsp;&nbsp;&nbsp;&nbsp;모듈 Drop은 ModReg 웹사이트에서 할
                      수 있습니다. 보통 Week 2전에 취소하면 성적에 영향이 없고
                      Week 3부터 Recess week 마지막 날 사이에 드랍하면 성적표에
                      W (Withdrawn) Grade로 기록이 남습니다. Faculty마다 다르나
                      보통 Week 7부터는 ModReg 웹사이트에서 drop이 안 되고
                      Faculty 사무실로 직접 찾아가야 합니다. 이 경우에는
                      성적표에 F grade로 남게 됩니다. 자세한 일정은 NUS Academic
                      Calendar에 나와 있습니다.
                    </p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={this.handleCheck}
                      defaultChecked={this.state.checked}
                    />
                    <i></i>
                    <h4>
                      새 학년 1학기 시작하기 전까지 준비해야 되는 것이나 끝내야
                      되는 것 무엇들이 있나요?
                    </h4>
                    <p className="text-left">
                      &nbsp;&nbsp;&nbsp;&nbsp;학비와 기숙사비, 수강신청 등등
                      모두 Orientation Week 이후에 하는 것들이니 걱정 안하셔도
                      되고 기숙사 내에서 생활하기 위한 옷, 학용품, 세면 용품
                      등등만 준비 해오시면 됩니다. 각 기숙사에서 제공해주는
                      물품, 가구 (?) 들에 대한 정보는 (다른 FAQ 질문이나 기숙사
                      소개 사이트 링크) 에서 보시기 바랍니다.
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section position-relative">
          <img
            className={`img-fluid w-100 ${schoolStyles.specialBg}`}
            src={educatin_bg}
            alt="bg-image"
          />
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h2 class="section-title">Faculty</h2>
              </Col>
              <Col lg={12} className="text-center">
                <p class="paragraph-lg">
                  Infinite possibilities. We offer a global and Asian experience
                  that is broad, deep and rigorous. An NUS education is
                  recognised as among the best in Asia, and the world. Whichever
                  undergraduate or graduate programme you choose, your
                  experience will be intellectually fulfilling within and
                  outside the classroom.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section position-relative">
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h2 class="section-title">기숙사</h2>
              </Col>
              <Col lg={12} className="text-center">
                <p class="paragraph-lg">
                  Your friends at NUS will go on to become the architects,
                  designers, doctors, engineers, entrepreneurs, lawyers,
                  musicians, writers and politicians of their generation. You
                  will bond with them over meals, sports, seminars and community
                  activities. Living on campus is exciting and rewarding.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </HeaderFooter>
    )
  }
}
export default School
