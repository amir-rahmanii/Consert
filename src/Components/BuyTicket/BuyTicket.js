import React, { useEffect, useState } from 'react'
import datasConsert from '../../datasConsert'
import { Image, Container } from 'react-bootstrap'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import './BuyTicket.css'
import ChairdData from './ChairdData';

export default function BuyTicket() {
  const [datas, Setdatas] = useState([])
  const [showsChair , setShowsChairs] = useState(false)
  let param = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    let findArray = datasConsert.fajr.find(data => data.id == param.id)
    let findArray2 = datasConsert.tehran.find(data => data.id == param.id)
    let findArray3 = datasConsert.sonati.find(data => data.id == param.id)
    // let findArray4 = datasConsert.shahrestan.find(data => data.id == param.id)
    if(findArray){
      Setdatas(findArray) 
    }else if(findArray2){
      Setdatas(findArray2)
    }else if (findArray3){
      Setdatas(findArray3)
    }else{
      navigate('/Notfound')
    }
  } , [])

  const clickHandler = () => {
   setShowsChairs((prevstate) => {
    return !prevstate
   })
  }
  
  return (
    <>
      <Image fluid src={datas.img2} style={{ width: "100%" }} />
      <Container>
        <h4 className='mt-4 text-center'>کنسرت {datas.nameSinger}</h4>
        <div className='mt-3 text-center text-secondary'>
          <CiLocationOn /> {datas.location} _
          <MdDateRange /> {datas.date}
        </div>
        <div className='containershop'>
          <div onClick={clickHandler} className={`containershopdiv ${showsChair ? 'visible' : ''}`}>
            {showsChair ?  <TiTick /> :  <FiShoppingCart /> }
          <span className='datasday'>{datas.day}</span>
          <span className='datasdate'>{datas.date}</span>
          <span className='datastime'>{datas.time}</span>
          </div>
        </div>

        <div>
          {showsChair ? (
            <ChairdData />
          ) : ('')}
        </div>
      </Container>

    </>
  )
}
