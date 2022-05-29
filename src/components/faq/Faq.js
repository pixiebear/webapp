import { Container, Row, Col } from "react-bootstrap";
import {  Section, Title, Box } from "../core";
import styled from "styled-components";

import imgL from "../../assets/favicon.png";


const BoxStyled = styled(Box)`
  transition: 0.4s;
  padding: 30px 15px;
  border-radius: 20px;
  box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
  overflow: hidden;

  &:hover {
    transform: scale(0.9);
    border-radius: 15px;
    box-shadow: 0;
  }
`;


function Hero() {

return (

<>

        <Section className="pt-4 pb-0" id="questions">
        <Container>
     
          <Row>

          <div className="col-lg-4 col-md-6 mb-5">

                <BoxStyled className='col-11'>
                    <div className='row align-items-center'>
                        <Col className='xs-auto col-2'>
                            <img className="" alt="Pixie" height="50" width="50" src={imgL} />   
                        </Col>
                        <div className='col-10'>
                            <Title variant="cardLg" className='mb-0'>
                            How many mintable NFTs will there be ?
                            </Title>
                        </div>
                    </div>
                </BoxStyled>

          </div>


          <div className="col-lg-4 col-md-6 mb-5">
          <BoxStyled className='col-11 m-md-auto'>
                    <div className='row align-items-center'>
                        <Col className='xs-auto col-2'>
                            <img className="" alt="Pixie" height="50" width="50" src={imgL} />   
                        </Col>
                        <div className='col-10'>
                            <Title variant="cardLg" className='mb-0'>
                            When is the minting date will be announced?
                            </Title>
                        </div>
                    </div>
                </BoxStyled>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
            <BoxStyled className='col-11 offset-md-1'>
                    <div className='row align-items-center'>
                        <Col className='xs-auto col-2'>
                            <img className="" alt="Pixie" height="50" width="50" src={imgL} />   
                        </Col>
                        <div className='col-10'>
                            <Title variant="cardLg" className='mb-0'>
                            What is gonna be the minting price?
                            </Title>
                        </div>
                    </div>
                </BoxStyled>
            </div>



            <div className="col-lg-4 col-md-6 mb-5">
            <BoxStyled className='col-11'>
                    <div className='row align-items-center'>
                        <Col className='xs-auto col-2'>
                            <img className="" alt="Pixie" height="50" width="50" src={imgL} />   
                        </Col>
                        <div className='col-10'>
                            <Title variant="cardLg" className='mb-0'>
                            Where can I stay updated with project?
                            </Title>
                        </div>
                    </div>
                </BoxStyled>
            </div>


            <div className="col-lg-4 col-md-6 mb-5">
            <BoxStyled className='col-11 m-md-auto'>
                    <div className='row align-items-center'>
                        <Col className='xs-auto col-2'>
                            <img className="" alt="Pixie" height="50" width="50" src={imgL} />   
                        </Col>
                        <div className='col-10'>
                            <Title variant="cardLg" className='mb-0'>
                            Will it be some Gated Comunity for Membears?
                            </Title>
                        </div>
                    </div>
                </BoxStyled>
            </div>

              <div className="col-lg-4 col-md-6 mb-5">
            <BoxStyled className='col-11 offset-md-1'>
                    <div className='row align-items-center'>
                        <Col className='xs-auto col-2'>
                            <img className="" alt="Pixie" height="50" width="50" src={imgL} />   
                        </Col>
                        <div className='col-10'>
                            <Title variant="cardLg" className='mb-0'>
                            Will it be some Gated Comunity for Membears?
                            </Title>
                        </div>
                    </div>
                </BoxStyled>
            </div>


            </Row>
        </Container>
        </Section>

</>

);


}


export default Hero;