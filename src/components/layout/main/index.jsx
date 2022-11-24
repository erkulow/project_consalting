import React from 'react'
import styled from 'styled-components'
import { Satistics } from '../../satistics/Satistics'
import { TabItem } from '../../Technologies/TabItem'
import WorkMethod from '../../WorkMethod/WorkMethod/WorkMethod'
import WorkSkills from '../../WorkSkills/WorkSkills'
import { Contact } from '../contact'

export const Main = () => {
   return (
      <Container>
         <InnerContainer>
            <Title>
               <h1>About Us </h1>
               <p>
                  Almaz MOLODEC Almaz MOLODECAlmaz MOLODECAlmaz <br />
                  MOLODECAlmaz MOLODECAlmaz <br /> MOLODEC
               </p>
            </Title>
            <Satistics />
            <WorkSkills />
            <WrapperTestimonials>
               <h1>Testimonials Our students</h1>
            </WrapperTestimonials>
            <h1>WHAT DO WE OFFER</h1>
            <WorkMethod />
            <h1>
               We have helped our students get into <br /> the best universities
               in the world.
            </h1>
            <TabItem />
            <Contact />
         </InnerContainer>
      </Container>
   )
}
const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 140px;
`
const InnerContainer = styled.div`
   width: 93%;
   max-width: 1440px;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
`
const Title = styled.div`
   text-align: center;
   h1 {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
      line-height: 120%;
      margin-bottom: 30px;
   }
   p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      margin-bottom: 35px;
   }
`

const WrapperTestimonials = styled.div`
   h1 {
      text-align: center;
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
      line-height: 120%;
      margin-bottom: 40px;
   }
`
// const WrapperOFFER = styled.div`
//    width: 100%;
//    h1 {
//       margin-top: 20px;
//       text-align: center;
//       font-family: 'Space Grotesk';
//       font-style: normal;
//       font-weight: 700;
//       font-size: 38px;
//       line-height: 120%;
//       margin-bottom: 50px;
//    }
// `
