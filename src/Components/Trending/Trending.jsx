import React, { useState } from 'react'
import './Trending.css'
import Home from './../Home/Home';
import { trending } from '../../dummyData';

const Trending = () => {
const [items, setItems] = useState(trending)
  return (
    <>
      <div className="trending">
        < Home items={items} />
      </div>
    </>
  )
}

export default Trending
