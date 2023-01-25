import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Detail.scss'
function Detail() {
    const {id} = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
      axios.get(`http://localhost:4000/${id}`)
        .then(res => setDetail(res.data))
  })
  return (
    <div className='detail'>
        <ul>
            <li>image: {detail.image}</li>
            <li>category: {detail.category}</li>
            <li>name: {detail.name}</li>
            <li>price: ${detail.price}</li>
        </ul>
    </div>
  )
}

export default Detail