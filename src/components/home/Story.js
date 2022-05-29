import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { Title,  Section, Text } from "../core";

function Story() {

return (
<>
    <Element name="story" id="story">
            <Section className="mt-lg-5"  style={{zIndex:1, position:'relative'}}>
              <Container>
               
                  <Col lg="8">

                  <Title variant="secSm" className="my-4">
                      Story.
                    </Title>
                    <Text
                      variant="p"
                      css={`
                        max-width: 750px;
                      `}
                    >
                    Pixie Bears collection of 5555 Solana NFTs represents a group of bears who had just woken up from a long hibernation and are ready to gather all the resources and never again worry about getting fat for winter. All the bear necessities you might imagine. Salmon, berries, and of course, $Honey. Fat for life! Safe from those pesky hunters and their guns. All through unity.
                    </Text>
                  </Col>
              </Container>
            </Section>
        </Element>


        <Element name="manifesto" id="manifesto">
            <Section className="mt-lg-5"  style={{zIndex:1, position:'relative'}}>
              <Container>
                <Row>
                  <Col lg="8">

                    <Title variant="secSm" className="my-4">
                      Manifesto.
                    </Title>

                    <Title variant="cardLg" className="my-4">
                    Wolf in the Sheep's clothing
                    </Title>

                    <Text
                      variant="p"
                      css={`
                        max-width: 750px;
                      `}
                    >
                   Pixie Bears is a project that came to our minds in the midst of this rough bear market. Usually, when the bear market comes, Black Hats take advantage of it. We saw that many of our friends new in the space (even some OGs) were hacked or scammed in one way or another, and they lost their honestly earned cryptos and NFTs. Black hats operate usually in patterns and they target victims through various methods.
                   </Text>

                   <Title variant="cardLg" className="my-4">
                   Separating Sheep from the Goats
                    </Title>

                    <Text variant="p" css={` max-width: 750px; `} >
                    We all learn differently. Some of us learn better visually, and others do better listening, but there is something that works best for all. We all learn best from mistakes. It is our goal to build an educational platform where white hats can regularly update the web3 community regarding new threats and best ways of dealing with the aforementioned. Our platform will do exactly that, to simulate RL simulations and documentation of scams others experienced. We want to write the ultimate Pixie Bears memo that will make all bulletproof if followed.
                   </Text>
                   
                    <Title variant="cardSm" css={`max-width: 750px; `} >
                    <br></br>
                    Impossible? Bears don't think so. <br></br> <br></br>
                    Power is in our hands. <br></br> <br></br>
                    Together we are stronger. <br></br> <br></br>
                    Together we are PXBR.
                    </Title>

                  </Col>
                </Row>
              </Container>
            </Section>
        </Element>
</>
);


}


export default Story;