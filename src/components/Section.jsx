import React , { useContext } from 'react'
import { DataContext} from '../context/Usercontext'

const   Section= () => {
    const data = useContext(DataContext)
  return (
    <div className='bg-black text-white p-16'>
      <h1>this is sectiom  city    {data.city}</h1>
    </div>
  )
}
 
export default  Section
