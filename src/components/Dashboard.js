import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
   <>
    <div className='row'>
        <div className='col-md-6'>
          
           <Link to={'categories'}><h1>Categories</h1></Link>
            </div>
        <div className='col-md-6'>
        <Link to={'products'}><h1>Products</h1></Link>
        </div>
    </div>
   </>
  )
}
