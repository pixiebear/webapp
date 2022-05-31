import { Container, Row } from "react-bootstrap";

import { Section, Title } from "../components/core";


function Rarity() {

return (

  <>
  
  <Section hero className="position-relative ">
    <Container>
          <Row className="align-items-center h-100">
                      <div className="text-center my-5">
                      <Title variant="hero">The rarity page will be <br></br>unlocked after minting.</Title>
                      <Title variant="hero">Stay tuned!</Title>
                      </div>

        </Row>
    </Container>

  </Section>
  
  </>
  
);


}


export default Rarity;