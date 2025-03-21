import React from 'react'
import { Row , Col, Container,Image,Button,Stack} from 'react-bootstrap'
import "../style/MainBanner.css"; 
import ButtonCard from "./Card"
function MainBanner() {
return (
    <Container className='custom-container'>
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
            <Col > <Image src='../src/assets/Banner/purple-girl.webp' fluid className='d-none d-md-block' style={{width:"22rem",marginTop:"40px"}}></Image> </Col>
            <Col className="col-12 col-md-6 col-lg-4">  <ButtonCard></ButtonCard> </Col>
                
            <Col> <Image src='../src/assets/Banner/yellow-girl.webp'fluid className='d-none d-md-block' style={{width:"22rem",marginTop:"80px"}}></Image>
            </Col>
        </Row>
        
    </Row>
    </Container>
)
}

export default MainBanner
