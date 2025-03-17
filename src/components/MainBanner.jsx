import React from 'react'
import { Row , Col, Container,Image,Card,Button,Stack} from 'react-bootstrap'
import "../style/MainBanner.css"; 
function MainBanner() {
return (
    <Container>
    <Row className='text-center mt-5'>
        <Row className='banner-h2'>
            <h2 id='h2'>EASIEST ONLINE FORM BUILDER</h2>
        </Row>
        <Row className='banner-h1'>
            <h1>Powerful forms get it done.</h1>
        </Row>
        <Row className='banner-p'>
            <p>We believe the right form makes all the difference. Go from busywork to less work with powerful forms that use conditional logic, accept payments, generate reports, and automate workflows.</p>
        </Row>
        <Row>
            <Col> <Image src='../src/assets/Banner/purple-girl.webp' style={{width:"24rem"}}></Image> </Col>
            <Col> 
                <Card className='mt-5'>
                    <Card.Body >
                        <Stack direction="vertical" gap={3} >
                        <Button >Signup With Google</Button>
                        <Button variant='dark'><Image src=''></Image>Signup With Microsoft</Button>
                        <Button variant='light'>Signup With an email</Button>
                        <span>IT'S FREE</span>
                        </Stack>
                    </Card.Body>         
                </Card> 
                </Col>
            <Col> <Image src='../src/assets/Banner/yellow-girl.webp' style={{width:"24rem"}}></Image></Col>
        </Row>
        
    </Row>
    </Container>
)
}

export default MainBanner
