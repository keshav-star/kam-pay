// import React from 'react'
// export default function CompanyCard() {
  //   return (
    //     <div>
//         <img className='cardid' src={cardImage} alt="no" />
//     </div>
//   )
// }

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardImage from '../assets/Baskin-Robbins_logo.png'

function CompanyCard() {
  return (
    <Card style={{ width: '18rem',textAlign:'center' }}>
      <Card.Img height="90px" variant="top" src={cardImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CompanyCard;