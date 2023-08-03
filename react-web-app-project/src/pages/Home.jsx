import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { images } from '../images'


export default function Home() {
    const carouselImages = images.map((image) => (
        <Carousel.Item key={image.id}>
          <img
          className="d-block"
          src={image.src}
          alt={image.name}
          style={{
            margin: "auto",
            width: "100%",
            height: "400px"
          }} />
        </Carousel.Item>
      ))

  return (
    <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <h1 style={{
            marginTop: "2%",
            textAlign: "center"
            }}>Find Your Next Vacation Destination</h1>
        <Container style={{
            width: "50%",
            margin: "3% auto 0"
        }}>
            <Carousel>
            {carouselImages}
            </Carousel>
        </Container>
    </div>
  )
}
