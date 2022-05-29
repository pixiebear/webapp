import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text } from "../../components/core";
import { NavLink } from 'react-router-dom';

import imgS1 from "../../assets/image/jpg/details/details-6.jpg";
import { device } from "../../utils";

export default function GuidPage() {

    return (
      <>
          <div>
            <Section className="mt-lg-5">
              <Container>
               <Text variant="tag"><NavLink to='/faq'>Go Back</NavLink></Text>
                <Row>
                  <Col lg="7">
                  
                    <Title variant="secSm" className="my-4">
                      Adaptable but Identifiable Product for Kandinsky.{" "}
                    </Title>
                    <Text
                      variant="p"
                      css={`
                        max-width: 750px;
                      `}
                    >
                      To satisfy our goal of creating a brand that could adapt
                      across many use cases, we took the base form of their new logo
                      and used it as an artboard. As long as the structural outline
                      of the mark stayed consistent their brand was allowed to flex
                      and adapt to specific uses. And by introducing these
                      illustrative elements to the logomark, Strictly found it’s
                      voice.
                    </Text>
                  </Col>

                  <Col lg="5" className="mb-5">
                    <img src={imgS1} alt="" className="img-fluid w-100 my-4" />
                  </Col>
                </Row>
              </Container>
            </Section>
       
          
            <Section className="pt-4 pb-0">
              <Container>
                <Title variant="secSm" className="mb-5 pb-lg-4">
                  Key Findings
                </Title>
                <Row>
                  <Col lg="6" className="mb-5 pr-lg-5">
                    <Title variant="cardBig" className="mb-4">
                      01. Basics
                    </Title>
                    <Text variant="p">
                      To satisfy our goal of creating a brand that could adapt
                      across many use cases, we took the base form of their new logo
                      and used it as an artboard. As long as the structural outline
                      of the mark stayed consistent their brand was allowed to flex
                      and adapt to specific uses.
                    </Text>
                  </Col>
                  <Col lg="6" className="mb-5 pl-lg-5">
                    <Title variant="cardBig" className="mb-4">
                      02. Goals
                    </Title>
                    <Text variant="p">
                      To satisfy our goal of creating a brand that could adapt
                      across many use cases, we took the base form of their new logo
                      and used it as an artboard.
                    </Text>
                  </Col>
                  <Col lg="6" className="mb-5 pr-lg-5">
                    <Title variant="cardBig" className="mb-4">
                      03. Problems
                    </Title>
                    <Text variant="p">
                      To satisfy our goal of creating a brand that could adapt
                      across many use cases, we took the base form of their new logo
                      and used it as an artboard. As long as the structural outline
                      of the mark stayed consistent their brand was allowed to flex
                      and adapt to specific uses.
                    </Text>
                  </Col>
                  <Col lg="6" className="mb-5 pl-lg-5">
                    <Title variant="cardBig" className="mb-4">
                      04. Solutions
                    </Title>
                    <Text variant="p">
                      To satisfy our goal of creating a brand that could adapt
                      across many use cases, we took the base form of their new logo
                      and used it as an artboard. As long as the structural outline
                      of the mark stayed consistent their brand was allowed to flex
                      and adapt to specific uses.
                    </Text>
                  </Col>
                </Row>
              </Container>
            </Section>
            <Section bg="dark">
              <Container>
               
                <div className="text-center mt-lg-5">
                 
                <Button
                      arrowRight
                      className="border-0 text-capitalize me-3 py-3"
                      css={`
                        font-weight: 700
                        font-size: 1.5rem;
                        letter-spacing: -1.2px;
                        line-height: 1.375;
                        @media ${device.md} {
                          font-size: 2rem;
                        }
                    `}
                    >
                      Back
                    </Button>


                    <Button
                      arrowRight
                      className="border-0 text-capitalize py-3"
                      css={`
                        font-weight: 700
                        font-size: 1.5rem;
                        letter-spacing: -1.2px;
                        line-height: 1.375;
                        @media ${device.md} {
                          font-size: 2rem;
                        }
                    `}
                    >
                      Next
                    </Button>
                 
                </div>
              </Container>
            </Section>
           
          </div>
      </>
    );
  }