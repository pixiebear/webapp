import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";

import { Section, Title, Button } from "../core";
import PdfWhitepaper from '../../assets/PixieBearsWhitepaper.pdf';


const WhitePaper = () => {

  return (
    <>
    <Element name="whitepaper" id="whitepaper">
        <Section>
          <Container>
            <Row className="text-center justify-content-center">
              <Col lg="10" xl="7">
                <div className="text-center my-5">
                  <Title>Whitepaper</Title>
                </div>
                <div className="text-center">
                <a href = {PdfWhitepaper} target = "_blank" rel="noreferrer">
                  <Button pdfIcon>View PDF </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </Element>
    </>
  );
};

export default WhitePaper;
