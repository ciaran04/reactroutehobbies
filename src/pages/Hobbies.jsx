import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { hobbies } from '../data/hobbies'

const Hobbies = () => {
  return (
    <Container className="my-5">
      <h2>My Hobbies</h2>
      <Row className="mt-4">
        {hobbies.map((hobby) => (
          <Col key={hobby.id} md={6} lg={3} className="mb-4">
            <Link to={`/hobbies/${hobby.id}`} style={{ textDecoration: 'none' }}>
              <Card>
                <Card.Img 
                  variant="top" 
                  src={`https://picsum.photos/seed/${hobby.imageId}/300/200`} 
                />
                <Card.Body>
                  <Card.Title>{hobby.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Hobbies
