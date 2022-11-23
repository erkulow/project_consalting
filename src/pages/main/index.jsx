import React from 'react'
import { Main } from '../../components/layout/main'
import { Header } from '../../components/layout/header'
import { Background } from '../../components/UI/Background'
import { Footer } from '../../components/layout/footer'

export const MainPage = () => {
   return (
      <div>
         <Header />
         <Background />
         <Main />
         <Footer />
      </div>
   )
}
