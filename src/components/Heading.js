import React, {useState, useEffect} from 'react'
import '../App.css';

const Heading = () => {
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
    <div className='main_div'>
    <p className='d1'><span className='blink'>🔴</span>&nbsp; Live</p>
    <div className='d2'>
    <h2>CORONA TRACKER</h2>
    <h4>Last updated: {data.lastupdatedtime}</h4>
    </div>
    </div>
  )
}

export default Heading