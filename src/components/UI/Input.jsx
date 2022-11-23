import React from 'react'
import styled from 'styled-components'

export const Input = (props) => {
   return <Styledinput {...props} />
}

const Styledinput = styled.input`
   width: 100%;
   border: 1px solid #d1d1d1;
   border-radius: 4px;
   padding: 10px 16px;
   outline: none;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #878787;
`
