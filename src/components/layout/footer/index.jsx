import React from 'react'
import styled from 'styled-components'
import { BsFillTelephoneFill, BsFillGeoAltFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

export const Footer = () => {
   return (
      <Container>
         <InnerContainer>
            <WrapperLinks>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Portfolio</li>
            </WrapperLinks>
            <WrapperInfo>
               <WrapperContacts>
                  <p>
                     <span>
                        <BsFillGeoAltFill fontSize={20} /> Adress:
                     </span>
                     <a href="/"> Bishkek, Kayindy 129 (Bishkek Office)</a>
                  </p>
                  <p>
                     <span>
                        <BsFillTelephoneFill fontSize={20} /> Phone Number:
                     </span>
                     <a href="/"> +996 550 75 55 95 (Bishkek Office)</a>
                  </p>
                  <p>
                     <span>
                        <HiOutlineMail fontSize={20} /> Email:
                     </span>
                     <a href="/"> erkulow26@gmial.com © </a>
                  </p>
               </WrapperContacts>
               <WrapperLogo>
                  <h1>ALMAZ</h1>
               </WrapperLogo>
            </WrapperInfo>
            <h5>
               It was this company that inspired me to enter the States. Came to
               them for a consultation, they explained everything to me clearly
               and clearly. If you want to apply abroad, with this company you
               will have a better chance of getting a visa, discounts, etc. Good
               luck to all!
            </h5>
         </InnerContainer>
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 120px;
   background-color: #0a3161;
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
         color: #b31942;
         transition: 0.2s;
      }
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
`
const WrapperContacts = styled.div`
   p {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      a {
         display: block;
         cursor: pointer;
         transition: 0.2s;
         color: #ffffff;
         :hover {
            color: #b31942;
            transition: 0.2s;
         }
      }
      span {
         display: flex;
         align-items: center;
         gap: 8px;
      }
   }
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
