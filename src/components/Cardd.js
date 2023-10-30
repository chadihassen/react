import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardd() {
  let products ={
    src:"data:image/jpeg;base64,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",
    name: 'Jordan4',
    price: '200 $US',
    description: 'La Air Jordan 4 Sail possède une empeigne en cuir pleine fleur avec des touches de mesh et de matières translucides au niveau de la pointe et du talon. Un soupçon de bleu clair au niveau du logo Jumpman sur la languette et du Swoosh Nike sur la semelle extérieure apporte un effet contrasté aux chaussures à la couleur beige. Ces sneakers sont sorties en juillet 2020 au prix Retail de 200 $ USD.'


  }
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={products.src} />
    <Card.Body>
      <Card.Title>{products.name}</Card.Title>
      <Card.Text>
        {products.description}
      </Card.Text>
      <price style={{color: "red",}}>{products.price}</price>
    </Card.Body>
  </Card>
  )
}

export default Cardd