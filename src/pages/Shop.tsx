import styled from "styled-components";
import { Title, Section, Text, Box } from "../components/core";
import { Col, Row, Container } from "react-bootstrap";
import imgL1 from "../assets/image/hero/Merch.webp";

import { motion, useViewportScroll, useTransform } from 'framer-motion/dist/framer-motion';

function Shop() {


  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  const ImgRight = styled.img`
  max-width: 100%;
`;

return (
  

  <>
  {/* <!-- Hero Area --> */}
  <Section hero className="position-relative h-100">
    <Container>
      <Row className="align-items-center">
        <Col lg="7" md="6" sm="12" className="mb-5 mb-lg-0" style={{zIndex:1}}>
          <Box>
            <Title variant="hero">
            Merch.
            </Title>
            <Text variant="p" css={` max-width: 550px; `} >
            Pixie Bears will drop a collection after minting that will be too dope to be the true. In collaboration with Street Artists and Graffiti writers from the United Kingdom, Germany, Swiss, Brazil, Mexico, France, and Italy. Half of the profit from merch will go to the various charity organizations chosen by community voting.
            </Text>
             <Title variant="cardLg" css={`max-width: 750px; `} >
              Finest Materials. <br></br>
              Finest Art.<br></br>
              From streets to street, with love.<br></br>
             </Title>
          </Box>
        </Col>
        <Col lg="5" md="6" sm="12">

              <motion.div className="HeroWrap text-center text-lg-right position-relative"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              >

                <motion.div className="HeroKid" style={{ y: y1 }} >
                      <ImgRight src={imgL1} alt="bear" />
                </motion.div>

              </motion.div>

        </Col>
      </Row>
    </Container>
  </Section>

</>
);


}


export default Shop;