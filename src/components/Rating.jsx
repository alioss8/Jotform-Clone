import React from 'react'
import { Container,Row,Col,Image}from 'react-bootstrap'
import StarRating from "./RatingStar"
function Rating() {
return (
    <>
    <Container>
        <Row>
            <Col className='text-center mt-5'><p style={{fontSize:"32px",fontWeight:"400"}}>See why Jotform is trusted by <strong>30+ million users</strong> </p></Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center' style={{marginRight:"80px",marginTop:"50px"}} >
            <Col> 
                <Image src='../src/assets/Rating/g2-crowd.svg' style={{marginLeft:"80px"}}></Image>   <StarRating rating={4.7}/>
            </Col>
            <Col>
                <Image src='../src/assets/Rating/capterra.svg' style={{marginLeft:"15px",width:"200px",marginBottom:"5px"}}>
                </Image>
                <StarRating rating={4.7}/>
            </Col>
            <Col>
                <Image src='../src/assets/Rating/software-advice.svg' style={{marginLeft:"15px",width:"200px",marginBottom:"20px",marginTop:"10px"}}></Image><StarRating rating={4.7}/>
            </Col>
            <Col>
                <Image src='../src/assets/Rating/product-hunt.svg' style={{marginLeft:"15px",width:"200px"}}></Image>
                <StarRating rating={5.0}/>
            </Col>
            <Col> 
                <Image src='../src/assets/Rating/trustradius.svg' style={{marginLeft:"15px",width:"200px",marginBottom:"12px"}}></Image>
                <StarRating rating={4.5}/>
            </Col>
        </Row>
    </Container>
    </>
)
}

export default Rating
