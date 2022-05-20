import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { Title,  Section, Text, Box, Button,  } from "../core";
import { HashLink } from 'react-router-hash-link';

import imgS1 from "../../assets/image/Snap.webp";
import imgS2 from "../../assets/image/Noah.webp";
import imgS3 from "../../assets/image/Chewy.webp";
import imgS4 from "../../assets/image/Hurl.webp";
import imgS5 from "../../assets/image/Trif.webp";


import RotateImg from "../RotateImg";

function Team() {

return (
<>
        <div className="mt-lg-3 mb-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">&nbsp;</Text>
                <Title variant="cardBig" className="mt-3">
                  MINTING
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Date</Text>
                <Title variant="cardBig" className="mt-3">
                  TBA
                </Title>
              </Col>
              <Col lg="4">
            
                  <HashLink smooth to='/#team' >
                      <Button locked>Locked</Button>
                   </HashLink>
              </Col>
            </Row>
          </Container>
        </div>

        <Element name="team" id="team">
        <Section className="pt-4 pb-0">
        <Container>
        <Title variant="secSm" className="mt-5 pb-lg-4">
             Meet the Pixie Bears Team
        </Title>
          <Row>

          <div className="col-lg-3 col-md-6">
            <Box pt="2.125rem">
                <RotateImg imgSrc={imgS3} />
                <Box pt="1rem">

                    <div className="overflow-hidden">

                      
                      <Title variant="cardLg">
                        Chewy [ <a className="col nav-item px-2" target="_blank" rel="noreferrer" href="https://github.com/h47r15"> 
                                  <svg className="nav-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px"> 
                                      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
                                  </svg>
                              </a>

                            <a className="col nav-item px-2" target="_blank" rel="noreferrer" href="https://twitter.com/nikoovic"> 
                                <svg className="nav-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
                            </a>  ]
                      </Title>
                      <Text variant="tag" mb="0.5rem">
                       Based Developer
                      </Text>
                      <Text variant="p" mb="0.5rem">
                      Chewy is chewing code and design. With a decade of experience and nonstop grind. Basically, Chewy is Keanu Reeves of our team.
                       </Text>

                    </div>
                    </Box>
                </Box>
            </div>


          <div className="col-lg-3 col-md-6">
            <Box pt="2.125rem">
                <RotateImg imgSrc={imgS1} />
                <Box pt="1rem">

                    <div className="overflow-hidden">

                      <Title variant="cardLg">
                        Whoopty J [ <a className="col nav-item px-2" target="_blank" rel="noreferrer" href="https://twitter.com/whooptyJJ"> 
                                <svg className="nav-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
                            </a> ]
                    
                        
                      </Title>
                      <Text variant="tag" mb="0.5rem">
                        Leader
                      </Text>
                      <Text variant="p" mb="0.5rem">
                      Papa Bear, the crypto forest is his turf. All BTC and SOL trades go through him! Even if he's a bear, he's bullish all the time.
                      </Text>

                    </div>
                    </Box>
                </Box>
            </div>

            <div className="col-lg-3 col-md-6">
            <Box pt="2.125rem">
                <RotateImg imgSrc={imgS2} />
                <Box pt="1rem">

                    <div className="overflow-hidden">

                      <Title variant="cardLg">
                        Jeff [ <a className="col nav-item px-2" target="_blank" rel="noreferrer" href="https://twitter.com/dika_marko"> 
                                <svg className="nav-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
                            </a> ]
                    
                      </Title>
                      <Text variant="tag" mb="0.5rem">
                        Marketing Head
                      </Text>
                      <Text variant="p" mb="0.5rem">
                      Young Hustla, grinding his way to the top. Highly successful in trading and marketing. True OG. 
                      </Text>

                    </div>
                    </Box>
                </Box>
            </div>



            <div className="col-lg-3 col-md-6">
            <Box pt="2.125rem">
                <RotateImg imgSrc={imgS4} />
                <Box pt="1rem">

                    <div className="overflow-hidden">

                      <Title variant="cardLg">
                       Shelly
                      </Title>
                      <Text variant="tag" mb="0.5rem">
                        Artist
                      </Text>
                      <Text variant="p" mb="0.5rem">
                      Our gurl Shelly is drawing this amazing art. Talent, some people are just born with it. She's a gorgeous diamond in the rough.
                      </Text>

                    </div>
                    </Box>
                </Box>
            </div>


            <div className="col-lg-3 col-md-6">
            <Box pt="2.125rem">
                <RotateImg imgSrc={imgS5} />
                <Box pt="1rem">

                    <div className="overflow-hidden">

                      <Title variant="cardLg">
                        Trif
                      </Title>
                      <Text variant="tag" mb="0.5rem">
                        Ghost Writer
                      </Text>
                      <Text variant="p" mb="0.5rem">
                      You read it here, Trif wrote it. Quite famous yet too humble to break his anonymity.
                      </Text>

                    </div>
                    </Box>
                </Box>
            </div>


            </Row>
        </Container>
        </Section>
        </Element>

</>
);


}


export default Team;