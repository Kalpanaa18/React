import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const HomeCarousal = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
    <img src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww&w=1000&q=80" width="100%" height="400px" alt=''></img>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Lorem ipsum</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     <img src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww&w=1000&q=80"  width="100%" height="400px" alt=''></img>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     <img src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww&w=1000&q=80"  width="100%" height="400px" alt=''></img>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Lorem ipsum
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default HomeCarousal
