
import React , { useContext } from 'react'
import { DataContext} from '../context/Usercontext'

const   Header= () => {
    const data = useContext(DataContext)
  return (
    <div className='bg-black text-white p-16' >
      <h1>this is header {data.age}</h1>
    </div>
  )
}
 
export default  Header


