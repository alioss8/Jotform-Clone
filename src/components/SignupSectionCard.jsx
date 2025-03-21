import React from 'react'
import ButtonCard from './Card';
import { Row , Col, Container,Image,Button,Stack} from 'react-bootstrap'
import "../style/SignupSectionCard.css"; 
function SignupSectionCard() {
return (
    <div style={{background:"#0C174E"}} >
        <Container>
        <Row>
            <Col className='col-12 col-md-6 col-lg-5 m-auto text-col'>
                <h1 className='signup-h1'>Ready to get started?</h1>
                <p className='signup-p'>Create your first form and see why more than 30 million users around the world trust Jotform.</p>
            </Col>
        </Row>
        <Row className='col-12 col-md-6 col-lg-5 m-auto text-center' >
        <Col>
        <ButtonCard></ButtonCard>
        </Col>
        </Row>
        </Container>
    </div>
    )
}

export default SignupSectionCard