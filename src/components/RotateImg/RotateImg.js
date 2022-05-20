import React from "react";

import styled from "styled-components";
import { Box } from "../core";

const BoxStyled = styled(Box)`
  transition: 0.4s;
  border-radius: 20px;
  transform: scale(1);
  box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
  overflow: hidden;
  &:hover {
    transform: scale(0.9);
    border-radius: 15px;
    box-shadow: 0;
  }
`;

const RotateImg = ({ link = "/", imgSrc, ...rest }) => {
  return (
    <>
      <BoxStyled {...rest}>
        <div to='#' className="d-block">
          <img src={imgSrc} alt="" className="w-100" />
        </div>
      </BoxStyled>
    </>
  );
};
export default RotateImg;