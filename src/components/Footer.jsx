import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Image ,Stack,Dropdown, DropdownButton} from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF,  FaTwitter , FaLinkedinIn, FaPen, FaPinterest, FaYoutube, FaBriefcase } from "react-icons/fa";

import "../style/Footer.css"; 

const Footer = () => {
return (
    <footer className="bg-light py-5">
    <Container>
        <Row>
        <Col  xs={6} md={2}>
            <h5>Jotform</h5>
            <ListGroup >
                <ListGroupItem>Signup</ListGroupItem>
                <ListGroupItem>Create a Form</ListGroupItem>
                <ListGroupItem>My Workspace</ListGroupItem>
                <ListGroupItem>Pricing</ListGroupItem>
                <ListGroupItem>Jotform Enterprise</ListGroupItem>
                <ListGroupItem>Examples</ListGroupItem>
                <ListGroupItem>Products</ListGroupItem>
            </ListGroup>
        </Col>

        <Col  xs={6} md={2}>
            <h5>Marketplace</h5>
            <ListGroup variant="flush">
                <ListGroupItem>Templates</ListGroupItem>
                <ListGroupItem>Form Themes</ListGroupItem>
                <ListGroupItem>Form Widgets</ListGroupItem>
                <ListGroupItem>Integrations</ListGroupItem>
            </ListGroup>
        </Col>
        <Col  xs={6} md={2}>
            <h5>Support</h5>
            <ListGroup variant="flush">
                <ListGroupItem>Contact Us</ListGroupItem>
                <ListGroupItem>User Guide</ListGroupItem>
                <ListGroupItem>Help</ListGroupItem>
                <ListGroupItem>Jotform Academy</ListGroupItem>
                <ListGroupItem>Webinars</ListGroupItem>
            </ListGroup>
        </Col>

        <Col  xs={6} md={2}>
            <h5>Company</h5>
            <ListGroup variant="flush">
                <ListGroupItem>About Us</ListGroupItem>
                <ListGroupItem>Media Kit</ListGroupItem>
                <ListGroupItem>In the News</ListGroupItem>
                <ListGroupItem>Newsletters</ListGroupItem>
                <ListGroupItem>Partnerships</ListGroupItem>
            </ListGroup>
        </Col>
        <Col  xs={6} md={4} >
        
        <Stack direction="vertical" className="d-none d-md-flex">
            <h5 >Apps</h5>
            <Image fluid id="google-play-png" src="/Footer/google-play.png" ></Image>
            <Image fluid id="play-store-png"src="/Footer/app-store.png"></Image>
            <Image fluid id="google-play-png" src="/Footer/google-play.png"></Image>
        </Stack>
        </Col>
        <Col  xs={12} md={4} >
        <h5 id="apps-footer-h5"  className="d-md-none m-auto" >Apps</h5>
        <Stack direction="vertical" className="d-md-none ml-5 text-center mt-2">
            <Image  fluid id="google-play-png" src="/Footer/google-play.png" ></Image>
            <Image  fluid id="play-store-png"src="/Footer/app-store.png"></Image>
            <Image fluid id="google-play-png" src="/Footer/google-play.png"></Image>
        </Stack>
        </Col>
        </Row>
    </Container>
    
    <div style={{background:"#F3F3FE"}}>
    <Container className=" d-none d-md-flex">
        <Row >
            <Col md={1} >
            <Image src="/Footer/footer-img.png" ></Image>
            </Col>
            <Col md={9} style={{marginTop:"15px"}}>
            <span id="footer-offices">Our Offices </span>
            <span><FaMapMarkerAlt className="footer-icon"  /> Ankara | Hacettepe </span>
            <span><FaMapMarkerAlt  className="footer-icon"  /> Ankara | METU </span>
            <span><FaMapMarkerAlt   className="footer-icon" /> İzmir </span>
            <span><FaMapMarkerAlt   className="footer-icon" /> İstanbul </span>
            <span><FaMapMarkerAlt   className="footer-icon" /> San Francisco</span>
            <p className="footer-p" >
                © 2025 Jotform Inc. The name "Jotform" and the Jotform logo are registered trademarks
                of Jotform Inc.
            </p>
            </Col>
            <Col md={2}>
                <DropdownButton id="dropdown-basic-button" title="English" variant="outline-secondary">
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Türkçe</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Español</Dropdown.Item>
                </DropdownButton>
            </Col>
            
        </Row>
    </Container>

    <Container className="text-center d-md-none m-auto">
        <Row >
            <Stack direction="vertical " className="mt-3">
            <Col md={6}>
            <Image src="/Footer/footer-img.png" ></Image>
            </Col>
            <Col md={6}>
            <Stack direction="vertical" >
            <span id="footer-offices">Our Offices </span>
            <span><FaMapMarkerAlt className="footer-icon"  /> Ankara | Hacettepe </span>
            <span><FaMapMarkerAlt  className="footer-icon"  /> Ankara | METU </span>
            <span><FaMapMarkerAlt   className="footer-icon" /> İzmir </span>
            <span><FaMapMarkerAlt   className="footer-icon" /> İstanbul </span>
            <span><FaMapMarkerAlt   className="footer-icon" /> San Francisco</span>
            <p className="footer-p" >
                © 2025 Jotform Inc. The name "Jotform" and the Jotform logo are registered trademarks
                of Jotform Inc.
            </p>
            </Stack>
            </Col>
            <Col md={2}>
                <DropdownButton id="dropdown-basic-button" title="English" variant="outline-secondary">
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Türkçe</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Español</Dropdown.Item>
                </DropdownButton>
            </Col>
            </Stack>
        </Row>
    </Container>
    </div>

    <div className="footer-social-media">
    <Container>
        <Row className="justify-content-between align-items-center d-none d-md-flex">
          <Col md="6" className="d-flex justify-content-start">
            <div className="footer-links d-flex">
              <a href="#" className="me-3 text-dark text-decoration-none">Terms & Conditions |</a>
              <a href="#" className="me-3 text-dark text-decoration-none">Privacy Policy |</a>
              <a href="#" className="me-3 text-dark text-decoration-none">Security |</a>
              <a href="#" className="text-dark text-decoration-none">Accessibility Statement</a>
            </div>
          </Col>

          <Col md="6" className="d-flex justify-content-end">
            <div className="social-icons d-flex">
              <a href="#" className="icon-wrapper me-2"><FaFacebookF /></a>
              <a href="#" className="icon-wrapper me-2">< FaTwitter /></a>
              <a href="#" className="icon-wrapper me-2"><FaLinkedinIn /></a>
              <a href="#" className="icon-wrapper me-2"><FaPen /></a>
              <a href="#" className="icon-wrapper me-2"><FaPinterest /></a>
              <a href="#" className="icon-wrapper me-2"><FaYoutube /></a>
              <a href="#" className="icon-wrapper"><FaBriefcase /></a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-between align-items-center  d-md-none m-auto">
       
          <Col md="6" className="d-flex justify-content-center">
           
            <div className="footer-links d-flex ">
            <Stack direction="vertical" className=""> 
              <a href="#" className="me-3 text-dark text-decoration-none mt-2">Terms & Conditions </a>
              <a href="#" className="me-3 text-dark text-decoration-none mt-2">Privacy Policy </a>
              <a href="#" className="me-3 text-dark text-decoration-none mt-2">Security </a>
              <a href="#" className="text-dark text-decoration-none mt-2">Accessibility Statement</a>
              </Stack>
            </div>
            
          </Col>
         
          

          <Col md="6" className="d-flex justify-content-center ">
            <div className="social-icons d-flex mt-4">
              <a href="#" className="icon-wrapper me-2"><FaFacebookF /></a>
              <a href="#" className="icon-wrapper me-2">< FaTwitter /></a>
              <a href="#" className="icon-wrapper me-2"><FaLinkedinIn /></a>
              <a href="#" className="icon-wrapper me-2"><FaPen /></a>
              <a href="#" className="icon-wrapper me-2"><FaPinterest /></a>
              <a href="#" className="icon-wrapper me-2"><FaYoutube /></a>
              <a href="#" className="icon-wrapper"><FaBriefcase /></a>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
    </footer>
);
};

export default Footer;
