import React from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'

export const Number = () => {
   return (
      <StyledNumber>
         <CountUp
            start={-875.039}
            end={160527.012}
            duration={2.75}
            separator=" "
            decimals={4}
            decimal=","
            prefix="EUR "
            suffix=" left"
         />
      </StyledNumber>
   )
}

const StyledNumber = styled.div``
