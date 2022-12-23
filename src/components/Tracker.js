import React, { useEffect, useState } from 'react'

const Tracker = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const resp = await fetch('https://data.covid19india.org/data.json')
      // console.log(resp);
      const data = await resp.json();
      setData(data.statewise[0]);
      console.log(data.statewise[0]);
    } 
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <p className='main_p'>Location <span className='main'>India</span></p>
      <div className='m'>
      <p className='main_p main_'>Active <span className='main'>{data.active}</span></p>
      <p className='main_p main_'>Confirmed <span className='main'>{data.confirmed}</span></p>
      <p className='main_p main_'>Deaths <span className='main'>{data.deaths}</span></p>
      <p className='main_p main_'>Recovered <span className='main'>{data.recovered}</span></p>
      </div>
    </>
  )
}
export default Tracker