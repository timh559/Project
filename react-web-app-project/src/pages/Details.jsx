import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Details() {
  const results = useSelector((state) => state.location.result);

  return (
    <div>
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gridGap: "2rem",
            padding: "2rem"
          }}
        >
          {results.map((result, index) => {
            return (
              <div key={index}>
                <Card
                  style={{
                    width: "20rem",
                    margin: '2rem',
                    backgroundColor: "rgba(73, 181, 203, 0.5)",
                    borderRadius: "10px",
                    border: "solid",
                    borderColor: "black",
                  }}
                >
                  <Card.Img variant="top" src={result.main_photo_url} />
                  <Card.Body>
                    <Card.Title>{result.hotel_name}</Card.Title>
                    <Card.Text>
                      <strong>Rating:</strong>
                      {result.review_score}
                    </Card.Text>
                    <Card.Text>
                      <strong>Address:</strong>
                      {result.address}
                      {"\n"}
                      {result.city}
                      {"\n"}
                      {result.zip}
                    </Card.Text>
                    <Button variant="primary" href={result.url}>
                      View Site
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}