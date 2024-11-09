import React from 'react'
import { Link } from 'react-router-dom'

const CommonError = () => {
  return (
    <>
      <section className='container m-auto text-center bg-slate-700 h-96'>
        <h1 className='font-extrabold text-9xl p-10 text-slate-100'>OOPs !</h1>
        <h5 className='text-2xl font-semibold '>page Not Found</h5>

      </section>
    </>
  )
}


const ComingSoon = () => {
  return (
    <>
      <section className='container m-auto text-center bg-slate-50 h-96  border-b-2 shadow '>
        <h1 className='font-extrabold text-6xl p-10 text-slate-300'>Available Sooon !</h1>
        <h5 className='text-2xl font-semibold opacity-30 '>Sorry For inconvenince</h5>
        <button className='bg-slate-300 mt-5 p-3   hover:shadow '>
          <Link to="/">Home Page</Link> </button>
      </section>
    </>
  )
}

const handleBotton = () => {
  console.log('clicked')
}

export { CommonError, ComingSoon }
