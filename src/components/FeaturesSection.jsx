import React from 'react';
import Card_Section from './Card_Section';
import { Container, Row ,Col} from 'react-bootstrap';


const cardData = [
{
    id: 1,
    title: 'Build the form you need in minutes',
    description: 'Create professional-looking forms with no coding using Jotform’s online Form Builder. Then style your forms with your own logo, fonts, and colors.',
    imageUrl: '../src/assets/FeaturesSection/customize-forms-2.svg'
},
{
    id: 2,
    title: 'Integrate your form with business apps',
    description: 'Automatically send form submissions to email marketing services, project management boards, CRMs, cloud storage apps, and more with Jotform’s 150+ integrations.',
    imageUrl: '../src/assets/FeaturesSection/integrations-2.svg'
},
{
    id: 3,
    title: 'Collect online payments seamlessly',
    description: 'Whether you’re selling a product, accepting a fee, or collecting a donation, Jotform allows you to get paid directly through your form.',
    imageUrl: '../src/assets/FeaturesSection/payments-2.svg'
}
];

const FeaturesSection = () => {
return (
    <div className='features-div' style={{background:"#FCF1E1"}}>
    <Container>
    <Row >
        
        {cardData.map(card => (
        <Col className="col-12 col-md-6 col-lg-4  mr-5 mb-5">
        <Card_Section
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}/>
            </Col>
        ))}
        
    </Row>
    </Container>
    </div>
);
};

export default FeaturesSection;