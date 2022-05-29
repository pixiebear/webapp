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
  pdfIcon = false,
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

      {pdfIcon && (
       
        <svg width="13px" height="15px" 
        viewBox="0 0 13 15" 
        version="1.1" xmlns="http://www.w3.org/2000/svg"
        className={`
        ms-2
      `}
        >
            <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard" transform="translate(-1.000000, 0.000000)" fill="#fff" fill-rule="nonzero">
                    <g id="preview" transform="translate(1.500000, 0.500000)">
                        <path d="M3.77666667,7.63636364 C3.52326045,7.6328567 3.2700324,7.65095891 3.02,7.69045455 L3.02,10.1818182 L3.57333333,10.1818182 L3.57333333,9.27818182 C3.63658608,9.28249469 3.70008058,9.28249469 3.76333333,9.27818182 C4.05735775,9.29640332 4.34674954,9.20126754 4.56666667,9.01409091 C4.72176551,8.85095057 4.80321216,8.63600981 4.79333333,8.41590909 C4.79857938,8.19447359 4.70242425,7.98185899 4.53,7.83363636 C4.31157021,7.68422778 4.04438852,7.61426186 3.77666667,7.63636364 Z M3.77666667,8.84863636 C3.71465763,8.8555894 3.65200904,8.8555894 3.59,8.84863636 L3.59,8.09136364 C3.66533864,8.07449703 3.74264768,8.06701058 3.82,8.06909091 C4.1,8.06909091 4.25666667,8.20909091 4.25666667,8.43818182 C4.26164408,8.56031043 4.20844623,8.67802743 4.11196529,8.75837915 C4.01548435,8.83873088 3.88608821,8.8730827 3.76,8.85181818 L3.77666667,8.84863636 Z M7.68666667,10.1818182 L8.24666667,10.1818182 L8.24666667,9.16681818 L9.13333333,9.16681818 L9.13333333,8.70227273 L8.24666667,8.70227273 L8.24666667,8.12636364 L9.19666667,8.12636364 L9.19666667,7.65863636 L7.68666667,7.65863636 L7.68666667,10.1818182 Z M5.77666667,7.63636364 C5.52332138,7.63467345 5.27025563,7.65276406 5.02,7.69045455 L5.02,10.1818182 C5.22992182,10.2086102 5.44154826,10.2213685 5.65333333,10.22 C6.06111534,10.2488022 6.46604283,10.1357842 6.79333333,9.90181818 C7.07823918,9.63393844 7.22775532,9.26147416 7.20333333,8.88045455 C7.23082904,8.51721294 7.07623263,8.16304663 6.78666667,7.92590909 C6.49725869,7.71692284 6.13881297,7.6141641 5.77666667,7.63636364 L5.77666667,7.63636364 Z M5.77666667,9.75863636 C5.71238192,9.76476088 5.64761808,9.76476088 5.58333333,9.75863636 L5.58333333,8.10090909 C5.66658662,8.0841288 5.75160297,8.07665428 5.83666667,8.07863636 C6.05854629,8.06375497 6.27551047,8.14580319 6.42651258,8.30169534 C6.57751468,8.45758748 6.64623333,8.67047363 6.61333333,8.88045455 C6.61,9.48181818 6.28,9.765 5.77666667,9.76181818 L5.77666667,9.75863636 Z M8.66666667,0 L1.33333333,0 C0.596953667,0 0,0.569819409 0,1.27272727 L0,12.7272727 C0,13.4301806 0.596953667,14 1.33333333,14 L10.6666667,14 C11.4030463,14 12,13.4301806 12,12.7272727 L12,3.5 L8.66666667,0 Z M11.3333333,12.7272727 C11.3333333,13.0787267 11.0348565,13.3636364 10.6666667,13.3636364 L1.33333333,13.3636364 C0.9651435,13.3636364 0.666666667,13.0787267 0.666666667,12.7272727 L0.666666667,1.27272727 C0.666666667,0.921273341 0.9651435,0.636363636 1.33333333,0.636363636 L7.33333333,0.636363636 L7.33333333,3.81818182 C7.33333333,4.16963575 7.63181017,4.45454545 8,4.45454545 L11.3333333,4.45454545 L11.3333333,12.7272727 Z M8,3.81818182 L8,0.636363636 L8.33333333,0.636363636 L11.3333333,3.81818182 L8,3.81818182 Z" id="Shape"></path>
                    </g>
                </g>
            </g>
        </svg>
      )}
    </ButtonStyled>
  );
};

export default Button;
