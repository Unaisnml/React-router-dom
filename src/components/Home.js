import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
        <Link to='details'>Homepage</Link> 

        <div>
          <button onClick={()=>navigate('order-summary')}>
            Place Order
          </button>
        </div>
        </div>
  )
}

export default Home