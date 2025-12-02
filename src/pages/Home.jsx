import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className="my-5">
      <h2>Welcome Home</h2>
      <img 
        src="https://picsum.photos/600/400" 
        alt="Welcome" 
        className="img-fluid mt-3"
      />
    </Container>
  )
}

export default Home
