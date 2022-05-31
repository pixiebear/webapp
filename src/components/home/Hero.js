import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box } from "../core";
import { motion, useViewportScroll, useTransform } from 'framer-motion/dist/framer-motion';

import imgL1 from "../../assets/image/hero/1.webp";
import imgL2 from "../../assets/image/hero/2.webp";
import imgL3 from "../../assets/image/hero/3.webp";
import imgL4 from "../../assets/image/hero/4.webp";
import imgL5 from "../../assets/image/hero/5.webp";

const ImgRight = styled.img`
  max-width: 100%;
`;

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -250]);
  const y3 = useTransform(scrollY, [0, 500], [0, 11]);
  const y4 = useTransform(scrollY, [0, 500], [0, -105]);
  const y5 = useTransform(scrollY, [0, 500], [0, 400]);


  return (


    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative ">
          <Container>
          <Row className="align-items-center h-100">
            <Col lg="7" md="6" sm="12" className="mb-5 mb-lg-0" style={{zIndex:1}}>
              <Box>
                <Title variant="hero">
                 Pixie Bears <br></br>Solana NFT
                </Title>

                <Box className='mt-5'>
                  <a href="#story">
                    <Button arrowRight>Read more </Button>
                  </a>
                </Box>
              </Box>
            </Col>
            <Col lg="5" md="6" sm="12">

              <motion.div className="HeroWrap text-center text-lg-right position-relative"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              >
              

              <motion.div className="HeroKid" style={{ y: y3 }} >
                <ImgRight src={imgL3} alt="" />
              </motion.div>


              <motion.div className="HeroKid" style={{ y: y2 }} >
                <ImgRight src={imgL2} alt="oreol" />
              </motion.div>

              <motion.div className="HeroKid" style={{ y: y1 }} >
                    <ImgRight src={imgL1} alt="bear" />
              </motion.div>

              <motion.div className="HeroKid" style={{ y: y4 }} >
                <ImgRight src={imgL4} alt="" />
              </motion.div>

              <motion.div className="HeroKid" style={{ y: y5 }} >
                <ImgRight src={imgL5} alt="" />
              </motion.div>

             
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;