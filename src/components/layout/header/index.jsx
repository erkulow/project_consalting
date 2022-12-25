import React from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Button } from '../../UI/Button'

// import media from '../../../utils/helpers/media'

export const Header = () => {
   return (
      <WrapperHeader>
         <Conatiner>
            <h2>EDUGO</h2>
            <WrapperLinks>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Portfolio</li>
            </WrapperLinks>
            <Button>Contacts Us</Button>
            <GiHamburgerMenu
               fontSize="25px"
               style={{ display: 'block' }}
               color="#284c6f"
            />
         </Conatiner>
      </WrapperHeader>
   )
}

const WrapperHeader = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   background-color: #ffffff;
`

const Conatiner = styled.header`
   width: 100vw;
   max-width: 1440px;
   padding: 8px 15px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   /* FONT */
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   h2 {
      color: #284c6f;
   }
   button {
      @media screen and (max-width: 560px) {
         display: none;
      }
   }
`

const WrapperLinks = styled.ul`
   list-style: none;
   display: flex;
   gap: 20px;
   li {
      cursor: pointer;
      :hover {
         color: #fc9023;
         transition: 0.2s;
      }
   }
   @media screen and (max-width: 560px) {
      display: none;
   }
`
