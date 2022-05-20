import styled from "styled-components";
import {
  color,
  space,
  border,
  typography,
  shadow,
  flexbox,
  layout,
} from "styled-system";

const ButtonStyled = styled.button`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.63px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 23px 30px;
  box-shadow: 0 32px 54px rgba(3, 3, 3, 0.12);
  border-radius: 50rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  transform: perspective(1px) translateZ(0);
  position: relative;
  overflow: hidden;
  border: none;
  outline: none !important;
  white-space: nowrap;
  background: var(--bs-blue)
  ${border};
  ${color};
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};
  transition: 0.4s ease-out;
  &:hover,
  &:focus,
  &:active {
    transform: translateY(-10px);
    box-shadow: 0 32px 54px rgba(3, 3, 3, 0.14);
  }
`;

const Button = ({
  color = "#fff",
  arrowRight = false,
  locked = false,
  children,
  ...rest
}) => {
  return (
    <ButtonStyled  color={color} {...rest}>
      {children}
      {arrowRight && (
        <svg
          id="SVGDoc"
          width="18"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 18 12"
          className={`
            ms-2
          `}
        >
          <defs></defs>
          <desc>Generated with Avocode.</desc>
          <g>
            <g>
              <title>tail-right</title>
              <g>
                <title>Path</title>
                <path
                  d="M1,5.5h16"
                  fillOpacity="0"
                  fill="#ffffff"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  stroke="#ffffff"
                  strokeMiterlimit="20"
                  strokeWidth="2"
                ></path>
              </g>
              <g>
                <title>Path</title>
                <path
                  d="M12,1v0l5,5v0l-5,5v0"
                  fillOpacity="0"
                  fill="#ffffff"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  stroke="#ffffff"
                  strokeMiterlimit="20"
                  strokeWidth="2"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      )}
      {locked && (
        <svg width="11px" 
        height="15px" 
        viewBox="0 0 11 15" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`
        ms-2
      `}
      >
       
          <defs></defs>
          <desc>Locked</desc>
     
         
        <g id="padlock2a" transform="translate(0.000000, 1.000000)">
            <path d="M1.5,8 L1.5,4 C1.5,1.77777778 3.27777778,0 5.5,0 C7.72222222,0 9.5,1.77777778 9.5,4 L9.5,8" id="circle4135" stroke="#ffff"></path>
            <path d="M5.5,3 C2.47069565,3 0,5.47069565 0,8.5 C0,11.5288261 2.47069565,14 5.5,14 C8.52882609,14 11,11.5288261 11,8.5 C11,5.47069565 8.52882609,3 5.5,3 Z M5.5,6.10869565 C6.29240855,6.10869565 6.93478261,6.75106971 6.93478261,7.54347826 C6.93406497,8.10534283 6.60545295,8.61508399 6.094,8.84769565 L6.93478261,11.3695652 L4.06521739,11.3695652 L4.906,8.84769565 C4.39454705,8.61508399 4.06593503,8.10534283 4.06521739,7.54347826 C4.06521739,6.75106971 4.70759145,6.10869565 5.5,6.10869565 Z" id="path4133" fill="#ffff" fill-rule="nonzero"></path>
        </g>
  

      </svg>
      )}
    </ButtonStyled>
  );
};

export default Button;
