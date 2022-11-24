import React from 'react'
import styled from 'styled-components'
import { Button } from '../../UI/Button'
import { Input } from '../../UI/Input'

export const Contact = () => {
   return (
      <>
         <Title>
            <h1>Contacts us</h1>
            <p>
               Whether you have questions or you would <br /> just like to say
               hello, contact us.
            </p>
         </Title>
         <WrapperForm>
            <FirstForm>
               <Input placeholder="Name" type="text" />
               <Input placeholder="Last Name" type="text" />
            </FirstForm>
            <SecondForm>
               <Input placeholder="Email Address" type="email" />
               <Input placeholder="Phone Number" type="number" />
            </SecondForm>
            <textarea cols="30" rows="10" placeholder="Your Message" />
            <Button>Send</Button>
         </WrapperForm>
      </>
   )
}
const Title = styled.div`
   h1 {
      text-align: center;
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
      line-height: 120%;
      margin-bottom: 30px;
   }
   p {
      text-align: center;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
   }
`
const WrapperForm = styled.form`
   margin-top: 50px;
   width: 60%;
   display: flex;
   flex-direction: column;
   gap: 20px;
   textarea {
      width: 100%;
      resize: none;
      height: 200px;
      padding: 10px 16px;
      outline: none;
      border: 1.2px solid #d1d1d1;
      border-radius: 4px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
   }
`
const FirstForm = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   gap: 15px;
   input {
      width: 50%;
   }
`
const SecondForm = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   gap: 15px;

   input {
      width: 50%;
   }
`
