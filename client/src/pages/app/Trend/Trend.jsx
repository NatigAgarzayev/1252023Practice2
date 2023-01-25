import React from 'react'
import './Trend.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
function Trend() {
  const navigate = useNavigate();
  const [sorted, setSorted] = useState(false);
  const [filter, setFilter] = useState('');
  const [list, setList] = useState([]);
  function getData(){
    axios.get('http://localhost:4000')
        .then(res => setList(res.data))
  }
  useEffect(() => {
    getData();
  }, [])

  async function handleClick(id){
    await axios.delete(`http://localhost:4000/${id}`)
    getData();
  }
  async function handleDetail(id){
    navigate(`/detail/${id}`)
  }

  return (
    <div className='trend'>
        <div className="container">
            <div className="trend__body">
                <div className="trend__head">
                    <div className="trend__subtitle subtitle">Popular Item in the market</div>
                    <div className="trend__title title">Trending <span>Product</span></div>
                </div>
                <div className="trend__input">
                  <input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" placeholder='Search'/>
                  <button onClick={() => setSorted(!sorted)} className=''>by Price</button>
                </div>
                <div className="trend__grid">
                   {
                       sorted 
                       ? list
                          .filter(item => filter === '' ? item : item.name.toLowerCase().includes(filter.toLowerCase()))
                          .sort((a, b) => a.price - b.price)
                          .map(item => (
                            <div className="trend__grid-item">
                                <div className="trend__grid-image">
                                    <img src={item.image} alt="" />
                                    <div className="trend__hidden">
                                        <button onClick={() => handleClick(item._id)} className=''>Delete</button>
                                        <button onClick={() => handleDetail(item._id)} className=''>Detail</button>
                                    </div>
                                </div>
                                <div className="trend__grid-category">{item.category}</div>
                                <div className="trend__grid-name">{item.name}</div>
                                <div className="trend__grid-price">${item.price}</div>
                            </div>
                          ))
                        :
                        list
                          .filter(item => filter === '' ? item : item.name.toLowerCase().includes(filter.toLowerCase()))
                          .map(item => (
                            <div className="trend__grid-item">
                                <div className="trend__grid-image">
                                    <img src={item.image} alt="" />
                                    <div className="trend__hidden">
                                        <button onClick={() => handleClick(item._id)} className=''>Delete</button>
                                        <button onClick={() => handleDetail(item._id)} className=''>Detail</button>
                                    </div>
                                </div>
                                <div className="trend__grid-category">{item.category}</div>
                                <div className="trend__grid-name">{item.name}</div>
                                <div className="trend__grid-price">${item.price}</div>
                            </div>
                          ))
                   }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trend