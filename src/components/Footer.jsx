import React , { useContext } from 'react'
import { DataContext} from '../context/Usercontext'

const Footer = () => {
    const data = useContext(DataContext)
  return (
    <div className='bg-black text-white p-16'>
      <h1 >that  is footer {data.username}</h1>
    </div>
  )
}

export default Footer
