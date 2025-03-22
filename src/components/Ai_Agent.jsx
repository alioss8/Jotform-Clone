import React from 'react'
import { Row , Col, Container,Image,Button,Stack,Card} from 'react-bootstrap'
import "../style/Ai_Agent.css"; 
function Ai_Agent() {
  return (
    <>
    <Container >
    <Row>
          <Card style={{height:"auto",width:"auto",justifyContent:"space-between"}} className='mt-5 ai-card'>
                <Stack direction='horizontal' style={{marginTop:"50px"}}>
                <Image fluid src='../src/assets/Agent/section-left.png' className='d-none d-md-block' style={{width:"13rem", height:"18rem"}}></Image>
                <Container className='text-center'>
                <h2 id='ai-agent'>Announcing Jotform AI Agents</h2>
                <h1 id='customer-h1'>The Future of Customer Service</h1>
                <p id='ai-agent-p'>Imagine a world where you can respond instantly to any customer, anytime, anywhere.</p>
                <Button variant='light' id='ai-agent-button'>Discover Now</Button>
                </Container>
                <Image fluid src='../src/assets/Agent/section-right.png' className='d-none d-md-block'  style={{width:"13rem", height:"18rem",}}></Image>
                </Stack>
          </Card>
        
    </Row>
    </Container>
    </>
  )
}

export default Ai_Agent