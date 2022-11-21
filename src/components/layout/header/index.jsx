import React from 'react'
import styled from 'styled-components'
import { Button } from '../../UI/Button'

export const Header = () => {
   return (
      <WrapperHeader>
         <Conatiner>
            <h2>ALMAZ</h2>
            <WrapperLinks>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Portfolio</li>
            </WrapperLinks>
            <Button>Contacts Us</Button>
         </Conatiner>
      </WrapperHeader>
   )
}

const WrapperHeader = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   background-color: red;
`

const Conatiner = styled.header`
   width: 100vw;
   max-width: 1440px;
   padding: 16px 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   /* FONT */
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
`

const WrapperLinks = styled.ul`
   list-style: none;
   display: flex;
`