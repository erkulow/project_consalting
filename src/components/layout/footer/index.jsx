import React from 'react'
import styled from 'styled-components'
import {
   BsFillTelephoneFill,
   BsFillGeoAltFill,
   BsInstagram,
   BsFacebook,
} from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

export const Footer = () => {
   return (
      <Container>
         <InnerContainer>
            <WrapperLogo>
               <h1>EDUGO</h1>
            </WrapperLogo>
            <WrapperLinks>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Portfolio</li>
            </WrapperLinks>
            <WrapperInfo>
               <WrapperContacts>
                  <p>
                     <BsFillGeoAltFill fontSize={20} color="white" />
                     <a href="/"> Bishkek, Kayindy 129 (Bishkek Office)</a>
                  </p>
                  <p>
                     <BsFillTelephoneFill fontSize={20} color="white" />
                     <a href="/"> +996 550 75 55 95 (Bishkek Office)</a>
                  </p>
                  <p>
                     <HiOutlineMail fontSize={20} color="white" />
                     <a href="/"> erkulow26@gmial.com</a>
                  </p>
               </WrapperContacts>
               <WrapperIcons>
                  <BsInstagram />
                  <BsFacebook />
               </WrapperIcons>
            </WrapperInfo>
         </InnerContainer>
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 120px;
   background-color: #214e7f;
`
const InnerContainer = styled.div`
   width: 93%;
   max-width: 1440px;
   padding: 40px 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   h5 {
      margin-top: 20px;
      text-align: center;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #ffffff;
   }
`
const WrapperLinks = styled.ul`
   margin-top: 20px;
   list-style: none;
   display: flex;
   gap: 20px;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #bcd8ff;

   li {
      cursor: pointer;
      :hover {
         color: #f49820;
         transition: 0.2s;
      }
   }
   @media screen and (max-width: 560px) {
      flex-direction: column;
      align-items: center;
   }
`
const WrapperInfo = styled.div`
   margin-top: 20px;
   width: 100%;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   /* --- */
   display: flex;
   justify-content: space-between;
   align-items: center;
   @media screen and (max-width: 600px) {
      flex-direction: column-reverse;
   }
`
const WrapperContacts = styled.div`
   display: flex;
   gap: 15px;
   p {
      margin-top: 10px;
      display: flex;
      a {
         display: block;
         cursor: pointer;
         transition: 0.2s;
         color: #ffffff;
         margin-left: 10px;
         :hover {
            color: #f49820;
            transition: 0.2s;
         }
      }
      span {
         display: flex;
         align-items: center;
         gap: 8px;
      }
      @media screen and (max-width: 600px) {
         margin-top: 15px;
      }
   }
   @media screen and (max-width: 600px) {
      flex-direction: column;
   }
`
const WrapperIcons = styled.div`
   display: flex;
   gap: 15px;
   font-size: 20px;
   cursor: pointer;
   color: white;
   margin: 20px 0;
`
const WrapperLogo = styled.div`
   h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
      color: #ffffff;
   }
`
