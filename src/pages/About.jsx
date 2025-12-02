import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container className="my-5">
      <h2>About Me</h2>
      <p className="mt-3">
        <strong>Name:</strong> Your Name
      </p>
      <p>
        <strong>Email:</strong> your.email@example.com
      </p>
      <p>
        <strong>Course:</strong> CS491
      </p>
      <p>
        This is a React project demonstrating routing and Bootstrap components.
      </p>
    </Container>
  )
}

export default About
