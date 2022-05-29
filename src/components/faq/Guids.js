import { Section, Title } from "../core";
import { Element } from "react-scroll";
// import { HashLink } from 'react-router-hash-link';

// import { Card } from "react-bootstrap";
// import { guidList } from "./guidList";

import { motion } from 'framer-motion/dist/framer-motion';

export default function Guids() {

  
    return (
        <Element name="manifesto" id="security">
            <Section className="mt-lg-5 pt-5"  style={{zIndex:1, position:'relative'}}>
            <div className='container'>
                <Title variant="secSm" className="my-4">Security 101</Title>

            
                  <div className="text-center my-5 py-5">
                  <Title variant="secSm">Limited resources, for now. </Title>
                  <Title variant="secSm">Bears are stomping.</Title>
                  <Title variant="secSm">Bears are comming.</Title>
                 
                            <motion.div 
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.1 }}
                            
                            variant="secSm"> 
                            
                                    <Title variant="secSm" className="d-inline-flex"> ><motion.div
                                    animate={{
                                        opacity: [1, 0],
                                        
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatDelay: 0.7
                                    }}
                                    >_</motion.div> </Title>
                            
                            </motion.div>
                
                  
                  </div>
         

                {/* <div className='row p-0 faqRow'>
                {guidList.map((item) => (
                    <div  className=' col-12 col-lg-4 col-md-6 p-4'>
                    <HashLink smooth to={`${item.id}`} >
                            <Card className={`layoutItem Zindex-${item.id} d-flex`}
                            key={item.id}
                            layoutId={`${item.id}`}
                            >
                                <Card.Img variant="top" src={`assets/icons/${item.img}.png`} />
                                <Card.Body >
                                <Title variant="cardLg" className='mb-0'>{`${item.label}`}</Title>
                                <Text
                                    variant="lg"
                                    css={`
                                        max-width: 750px;
                                    `}
                                    >
                                    {`${item.label}`}
                                    </Text>

                                </Card.Body>

                                <Card.Footer>
                                    <small className="text-muted">Last updated Jun 2022</small>
                                </Card.Footer>
                            </Card>
                    </HashLink>
                    </div>
                ))}
                </div> */}

            </div>
        </Section>
      </Element>
    );
  }