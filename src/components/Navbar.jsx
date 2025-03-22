import React, { useState } from 'react';
import { Navbar, Nav, Container, Button ,Accordion,Stack} from 'react-bootstrap';
import "../style/Navbar.css"; 

function NavbarHomePage() {
  const [showTemplates, setShowTemplates] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showIntegrations, setShowIntegrations] = useState(false);
  return (
    <Navbar bg="white" expand="lg" className='navbar' >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/Navbar/Jotformlogo.png"
            alt="Jotform Logo"
            className="d-inline-block align-top"
            id='jotform-logo-navbar'
          />
        </Navbar.Brand>

        <Navbar.Toggle className='.navbar-toggler' aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
        <Container className='d-none d-md-block'>
          <Stack direction="horizontal">
          <Nav className="me-auto">
            
            <Nav.Link href="#workspace">My Workspace</Nav.Link>

            {/* Templates Dropdown */}
            <div
              onMouseEnter={() => setShowTemplates(true)}
              onMouseLeave={() => setShowTemplates(false)}
              className="nav-item dropdown"
            >
              <Nav.Link href="#templates" className="dropdown-toggle">
                Templates
              </Nav.Link>
              <div className={`dropdown-menu ${showTemplates ? 'show' : ''}`}>
                <div className="dropdown-grid">
                  <div>
                    <h6>Templates</h6>
                    <ul>
                      <li>Form Templates</li>
                      <li>Card Forrm Templates</li>
                      <li>App Templates</li>
                      <li>Store Builder Templates</li>
                      <li>Table Templates</li>
                      <li>Workflow Templates</li>
                      
                    </ul>
                  </div>
                  <div>
                    
                    <ul>
                      <li>Pdf Templates</li>
                      <li>Sign Templates</li>
                      <li>Ai Agent Templates</li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div
              onMouseEnter={() => setShowIntegrations(true)}
              onMouseLeave={() => setShowIntegrations(false)}
              className="nav-item dropdown"
            >
              <Nav.Link href="#integrations" className="dropdown-toggle">
                Integations
              </Nav.Link>
              <div className={`dropdown-menu ${showIntegrations? 'show' : ''}`}>
              <div className="dropdown-grid">
                  <div>
                    <h6>Integrations</h6>
                    <ul>
                      <li>Microsoft Teams</li>
                      <li>Paypal</li>
                      <li>Slack</li>
                      <li>Google Sheets</li>
                      <li>Zoom</li>
                      
                      
                    </ul>
                  </div>
                  <div>
                    
                    <ul>
                      <li>Dropbox</li>
                      <li>Google Calendar</li>
                      <li>Sales Force</li>
                      <li>Canva</li>
                      <li>See more </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Dropdown */}
            <div
              onMouseEnter={() => setShowSupport(true)}
              onMouseLeave={() => setShowSupport(false)}
              className="nav-item dropdown"
            >
              <Nav.Link href="#support" className="dropdown-toggle">
                Support
              </Nav.Link>
              <div className={`dropdown-menu ${showSupport ? 'show' : ''}`}>
              <div className="dropdown-grid">
                  <div>
                    <h6>Support</h6>
                    <ul>
                      <li>Contact Support</li>
                      <li>Help Center</li>
                      <li>FAQ</li>
                      <li>User Guide</li>
                      <li>Jotform Books</li>
                      
                      
                    </ul>
                  </div>
                  <div>
                    
                    <ul>
                      <li>Blog</li>
                      <li>Videos</li>
                      <li>Jotform Academy</li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
              
            

            {/* Products Dropdown */}
            <div
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
              className="nav-item dropdown"
            >
              <Nav.Link href="#products" className="dropdown-toggle">
                Products
              </Nav.Link>
              <div className={`dropdown-menu ${showProducts ? 'show' : ''}`}>
                <div className="dropdown-grid">
                  <div>
                    <h6>PRODUCTS</h6>
                    <ul>
                      <li>Form Builder</li>
                      <li>Jotform Apps</li>
                      <li>Jotform Tables</li>
                      <li>Jotform Mobile App</li>
                      <li>Smart PDF Forms</li>
                      <li>Jotform Sign</li>
                      <li>Jotform for Salesforce</li>
                    </ul>
                  </div>
                  <div>
                    <h6>FEATURES</h6>
                    <ul>
                      <li>Jotform Teams</li>
                      <li>Enterprise Mobile</li>
                      <li>Prefill Forms</li>
                      <li>HIPAA Forms</li>
                      <li>Secure Forms</li>
                      <li>Assign Forms</li>
                      <li>Online Payments</li>
                      <li>Widgets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Nav.Link href="#enterprise">Enterprise</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Button variant="light" className= "navbar-signup-button ms-2">
              Sign Up for Free
            </Button>
          </Nav>
          </Stack>
          </Container>
          <div style={{width:"100%"}} className="mobile-navbar d-md-none"> {/* Sadece mobil için (md breakpoint altında) */}
        <Container fluid>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>My Workspace</Accordion.Header>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Templates</Accordion.Header>
          <Accordion.Body>
                    <h6>Templates</h6>
                    <ul>
                      <li>Form Templates</li>
                      <li>Card Forrm Templates</li>
                      <li>App Templates</li>
                      <li>Store Builder Templates</li>
                      <li>Table Templates</li>
                      <li>Workflow Templates</li>
                      <li>Pdf Templates</li>
                      <li>Sign Templates</li>
                      <li>Ai Agent Templates</li>
                    </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Integrations</Accordion.Header>
          <Accordion.Body>
                    <h6>Integrations</h6>
                    <ul>
                      <li>Microsoft Teams</li>
                      <li>Paypal</li>
                      <li>Slack</li>
                      <li>Google Sheets</li>
                      <li>Zoom</li>
                      <li>Dropbox</li>
                      <li>Google Calendar</li>
                      <li>Sales Force</li>
                      <li>Canva</li>
                      <li>See more </li>
                    </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Support</Accordion.Header>
          <Accordion.Body>
                    <h6>Support</h6>
                    <ul>
                      <li>Contact Support</li>
                      <li>Help Center</li>
                      <li>FAQ</li>
                      <li>User Guide</li>
                      <li>Jotform Books</li>
                      <li>Blog</li>
                      <li>Videos</li>
                      <li>Jotform Academy</li>
                    </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Products</Accordion.Header>
          <Accordion.Body>
                    <h6>PRODUCTS</h6>
                    <ul>
                      <li>Form Builder</li>
                      <li>Jotform Apps</li>
                      <li>Jotform Tables</li>
                      <li>Jotform Mobile App</li>
                      <li>Smart PDF Forms</li>
                      <li>Jotform Sign</li>
                      <li>Jotform for Salesforce</li>
                      <li>Jotform Teams</li>
                      <li>Enterprise Mobile</li>
                      <li>Prefill Forms</li>
                      <li>HIPAA Forms</li>
                      <li>Secure Forms</li>
                      <li>Assign Forms</li>
                      <li>Online Payments</li>
                      <li>Widgets</li>
                    </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Enterprise</Accordion.Header>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Pricing</Accordion.Header>
        </Accordion.Item>
        <Button  variant='light' className='accordion-login-button'>Login</Button>
        <Button  variant='light' className='accordion-signup-button'>Signup</Button>
      </Accordion>
      </Container>
    </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavbarHomePage;
