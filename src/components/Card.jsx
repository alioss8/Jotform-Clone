import React from 'react'
import { Card ,Stack,Button,Image}from 'react-bootstrap'
import "../style/Card.css"; 
function ButtonCard() {
return (
    <> 
        <Card className='ButtonCard  mt-5 '>
            <Card.Body >
                <Stack direction="vertical" gap={3} >
                    <Button   id='google-button'><Image id='google-icon' src='../src/assets/Card/google_icon.png'></Image>Signup With Google</Button>
                    <Button  id='microsoft-button'  variant='dark'><Image src='../src/assets/Card/microsoft_icon.png'  id='microsoft-icon'></Image>Signup With Microsoft</Button>
                    <span className='separator'>OR</span>
                    <Button variant='light' id='empty-button'>Signup With an email</Button>
                    <span className='card-footer-text'>IT'S FREE</span>
                </Stack>
            </Card.Body>
        </Card>          
    </>
)
}

export default ButtonCard
