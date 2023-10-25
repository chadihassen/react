import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardd() {
  return (
    <Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src="https://wegotthiscovered.com/wp-content/uploads/2022/01/featured-what-happened-to-sean-kingston.jpg" />
    <Card.Body>
      <Card.Title>Jean kingston</Card.Title>
      <Card.Text>
        Some Beautiful Song.
      </Card.Text>
      <Button variant="primary">Go Youtube</Button>
    </Card.Body>
  </Card>
  )
}

export default Cardd