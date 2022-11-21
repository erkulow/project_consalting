import React from 'react'
import styled from 'styled-components'

export const Button = ({ props, children }) => {
   return <StyledButton {...props}>{children}</StyledButton>
}

const StyledButton = styled.button`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   padding: 16px 24px;
   background: #105ff8;
   border-radius: 6px;
   border: none;
   outline: none;
   cursor: pointer;
   color: #ffffff;
   :hover {
      opacity: 0.9;
   }
`
