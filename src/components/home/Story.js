import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { Title,  Section, Text } from "../core";

function Story() {

return (
<>
    <Element name="story" id="story">
            <Section className="mt-lg-5"  style={{zIndex:1, position:'relative'}}>
              <Container>
                <Row>
                  <Col lg="8">

                    <Title variant="secSm" className="my-4">
                      PXBR Story
                    </Title>
                    <Text
                      variant="p"
                      css={`
                        max-width: 750px;
                      `}
                    >
                    Pixie Bears collection of 5555 Solana NFTs represents a group of bears who had just woken up from a long hibernation and are ready to gather all the resources and never again worry about getting fat for winter. All the bear necessities you might imagine. Honey, berries, and of course, salmon. Fat for life!
                    </Text>
                  </Col>
                </Row>
              </Container>
            </Section>
        </Element>

</>
);


}


export default Story;