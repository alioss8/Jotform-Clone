import React from 'react';
import { Card} from 'react-bootstrap';

const Card_Section = ({ title, description, imageUrl }) => {
  return (
    <Card style={{marginTop: '100px',backgroundColor:"transparent",border:"none" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title style={{fontSize:"24px",fontWeight:"700",marginTop:"20px"}}>{title}</Card.Title>
        <Card.Text style={{fontSize:"16px",fontWeight:"500",marginTop:"15px"}}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card_Section;