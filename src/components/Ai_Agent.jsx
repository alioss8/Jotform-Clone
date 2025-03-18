import React from 'react'
import { Row , Col, Container,Image,Button,Stack,Card} from 'react-bootstrap'
function Ai_Agent() {
  return (
    <>
    <Container >
    <Row>
        
            <Card style={{height:"300px"}} className='mt-5'>
                <Stack direction='horizontal' className='mt-3'>
                <Col>
                <Image fluid src='../src/assets/Agent/section-left.png' style={{width:"250px", height:"300px"}}></Image>
                </Col>
                <Col className='text-center'>
                <h3>alios</h3>
                <h1>alioss</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ipsam.</p>
                <Button>aliosss</Button>
                </Col>
                <Col>
                <Image fluid src='../src/assets/Agent/section-right.png' style={{width:"250px", height:"300px"}}></Image>
                </Col>
                </Stack>
            </Card>
        
    </Row>
    </Container>
    </>
  )
}

export default Ai_Agent