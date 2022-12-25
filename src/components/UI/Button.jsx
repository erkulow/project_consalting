import React from 'react'
import styled from 'styled-components'

export const Button = (props) => {
   return <StyledButton {...props}>{props.children}</StyledButton>
}

const StyledButton = styled.button`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 24px;
   padding: 8px 12px;
   background: #214c73;
   border-radius: 6px;
   border: none;
   outline: none;
   cursor: pointer;
   color: #ffffff;
   transition: 0.2s;
   :hover {
      opacity: 0.9;
      transition: 0.2s;
   }
   :active {
      opacity: 1;
   }
`
