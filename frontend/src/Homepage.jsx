import React from 'react'
import Billing from './screens/Billing'
import About from './screens/About'
import BillwiseSummary from './screens/BillwiseSummary'
import DaywiseSummary from './screens/DaywiseSummary'
import ModifyBill from './screens/ModifyBill'
import StockStatus from './screens/StockStatus'

const Homepage = () => {
  return (
    <div className=''>
        <Billing/>
        <BillwiseSummary/>
        <DaywiseSummary/>
        <ModifyBill/>
        <StockStatus/>
        <About/>
    </div>
  )
}

export default Homepage