import React from 'react'
import styled from 'styled-components'
import Back from '../../assets/video/background.mp4'
import { Button } from './Button'

export const Background = () => {
   return (
      <WrapperVideo>
         <VideoBackground
            autoPlay
            auto
            muted
            loop
            type="video/mp4"
            playsInline
            src={Back}
         />
         <Centered>
            <InnerCentered>
               <h1>We advise for study abroad</h1>
               <p>
                  We advise for study abroad. We advise for study abroad <br />
                  We advise for study abroad.
               </p>

               <Button>Talk to a Consultant</Button>
            </InnerCentered>
         </Centered>
      </WrapperVideo>
   )
}

const WrapperVideo = styled.div`
   width: 100%;
   height: 93vh;
   position: relative;
`
const VideoBackground = styled.video`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 0;
   width: 100%;
   height: 93vh;
   object-fit: cover;
`
const Centered = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   width: 100%;
   height: 93vh;
   background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 26%,
      rgba(0, 0, 0, 0) 100%
   );
   display: flex;
   justify-content: center;
   align-items: center;
`
const InnerCentered = styled.div`
   display: block;
   text-align: center;
   h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 46px;
      line-height: 120%;
      color: #f49820;
      margin-bottom: 30px;
      @media screen and (max-width: 560px) {
         font-size: 32px;
      }
   }
   p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: #ffffff;
      margin-bottom: 20px;
      word-break: keep-all;
      @media screen and (max-width: 560px) {
         font-size: 16px;
      }
   }
`
