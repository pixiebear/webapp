import { Container } from "react-bootstrap";
import { Section, Title, Button } from "../components/core";

import { HashLink } from 'react-router-hash-link';

function ErrorPage() {

return (

    <>
  
    <Section hero className="position-relative">
   
   <Container>
         <div className="text-center my-5">
         <Title variant="hero">404</Title>
           <Title variant="card-lg">Ups, somthing went wrong.</Title>
           <Title variant="card-lg" className='mb-5'>Return to Pixie Bears cave!</Title>

           <HashLink smooth to='/' >
                      <Button>Go 2 Home</Button>
            </HashLink>

         </div>
   </Container>
  
  </Section>
  
    
    
    </>

);


}


export default ErrorPage;