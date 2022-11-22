import { Component } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import romance from "../data/romance.json"

class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <h3 className="text-center mb-3">Latest Releases</h3>
          </Col>
          <Col sm={12}>
            <Row>
              {romance.map((book) => (
                <Col md={4} className="mb-3">
                  <Card>
                    <Card.Img variant="top" src={book.img} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default LatestRelease
