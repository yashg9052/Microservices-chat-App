import React, { Suspense } from 'react'
import {VerifyOTP} from "../components/verifyOTP"
import Loading from '../components/Loading'
const page = () => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <VerifyOTP/>

      </Suspense>
    </div>
  )
}

export default page
