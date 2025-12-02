import { useParams, Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import { hobbies } from '../data/hobbies'

const HobbyDetail = () => {
  const { id } = useParams()
  const hobby = hobbies.find(h => h.id === parseInt(id))

  if (!hobby) {
    return <Container className="my-5"><h2>Hobby not found</h2></Container>
  }

  return (
    <Container className="my-5">
      <h2>{hobby.title}</h2>
      <img 
        src={`https://picsum.photos/seed/${hobby.imageId}/600/400`} 
        alt={hobby.title}
        className="img-fluid my-3"
      />
      <p className="lead">{hobby.description}</p>
      <Link to="/hobbies">
        <Button variant="primary">Back to Hobbies</Button>
      </Link>
    </Container>
  )
}

export default HobbyDetail
