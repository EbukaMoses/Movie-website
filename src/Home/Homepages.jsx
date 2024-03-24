import React, { useState } from 'react'
import Homes from './../Components/Home/Homes';
import Upcoming from '../Components/Upcoming/Upcoming';
import { latest, upcome, recommended } from "../dummyData";
import Trending from './../Components/Trending/Trending';


const Homepages = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);
  return (
    <>
      <Homes />
      <Upcoming items={items} title="Upcoming Movies" />
      <Upcoming items={item} title="Latest Movies" />
      <Trending />
      <Upcoming items={rec} title="Recommended Movies" />
    </>
  );
}

export default Homepages
