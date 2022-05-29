import React, {useState, useCallback} from "react";
import { motion } from 'framer-motion/dist/framer-motion';
import styles from "styled-components";

import {  Title, Text } from "../core";


import { Col } from "react-bootstrap";
import { QuestionsList } from "./Questions";

export default function FaqQuestions() {

    const [index, setIndex] = useState(false);
    const [label, setLabel] = useState(false);
    const [answer, setAnswer] = useState(false);
    const [image, setImage] = useState(false);

    const handleClose = useCallback(() => {
      setIndex(false);
    }, []);

  
    return (
      <div className='container' id="questions">
        <Title variant="secSm" className="my-4">Collection FAQ</Title>
        <div className='row p-0 faqRow'>
           {QuestionsList.map((item) => (
            <div  className=' col-12 col-lg-4 col-md-6 p-4'>
            <motion.div
              className={`layoutItem Zindex-${item.id} d-flex`}
              key={item.id}
              layoutId={`${item.id}`}
              onClick={() => index === false && setIndex(item.id) & setLabel(item.label) & setAnswer(item.answer) & setImage(item.img)
              
              
              }
              initial={{ borderRadius: "20px" }}
            >
             
                <motion.div
                  className={styles.placeholder}
                  layoutId={`placeholder-${item.id}`}
                >
                  <div className='row align-items-center col-12 m-0'>
                          <Col className='xs-auto text-center col-2 p-0'>
                              <img className="badgeImg" alt="Pixie" src={`assets/icons/${item.img}.webp`} />   
                          </Col>
                          <div className='pe-0 col-10'>
                              <Title variant="cardLg" className='mb-0'>{`${item.label}`}</Title>
                          </div>
                      </div>
                </motion.div>
             
            </motion.div>
            </div>
          ))}
        </div>
   
          {index !== false && (
            <>
           
                 <div>
              <motion.div className='modalContainer' key="modal">
                <motion.div
                  className='aniModal'
                  layoutId={`${index}`}
                  initial={{ borderRadius: "30px" }}
                >
                  <motion.div
                    className={styles.placeholder}
                    layoutId={`placeholder-${index}`}
                  >
                      <div className='row align-items-center'>
                        <Col className='xs-auto col-2'>
                            <img className="" alt="Pixie" height="50" width="50" src={`assets/icons/${image}.webp`} />   
                        </Col>
                        <div className='col-10 pe-5'>
                            <Title variant="cardLg" className='mb-0'>{`${label}`}</Title>
                        </div>
                    </div>
                    
                    <Text
                      variant="lg"
                      css={`
                        max-width: 750px;
                      `}
                    >
                    {`${answer}`}
                    </Text>

                
                  </motion.div>
                 
                  <motion.div
                    className='modalClose'
                    layoutId={`close-${index}`}
                    onClick={handleClose}
                    transition={{ duration: 1.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <svg viewBox="0 0 20 20">
                      <path
                        d="M15 5L5 15M5 5l5.03 5.03L15 15"
                        fill="transparent"
                        strokeWidth="2"
                        stroke="currentColor"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className='modalBackdrop'
                key="backdrop"
                onClick={handleClose}
                variants={{
                  hidden: {
                    opacity: 0,
                    transition: {
                      duration: 0.12
                    }
                  },
                  visible: {
                    opacity: 0.8,
                    transition: {
                      delay: 0.01,
                      duration: 0.12
                    }
                  }
                }}
                initial="hidden"
                exit="hidden"
                animate="visible"
              />
              </div>
            
            </>
          )}

      </div>
    );
  }