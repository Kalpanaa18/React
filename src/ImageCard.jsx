import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const handleClick=()=>{
  console.log("Button Clicked");
}
const ImageCard = (props) => {
  // const[Count, setCount] = useState(50);
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.imgsrc}/>
    <Card.Body>
      <Card.Title>{props.Title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title.
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
    </Card.Body>
  </Card>
  
  </div>
  )
}

export default ImageCard
