import { Jumbotron, Container } from "react-bootstrap"

const Welcome = () => (
  <Jumbotron fluid>
    <Container>
      <h1 className="text-center">Strive Bookstore</h1>
      <p className="text-center">
        Books to help you <i>strive</i> for success
      </p>
    </Container>
  </Jumbotron>
)

export default Welcome
