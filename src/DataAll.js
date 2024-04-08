import React from 'react'
import { Card , Button } from 'react-bootstrap'
import './DataAll.css'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

export default function DataAll(props) {
  return (
    <Link to= {`/buyTicket/${props.id}`} style={{textDecoration : 'none'}}>
    <Card>
    <Card.Img variant="top" src={props.img} />
    <Card.Body className='text-center'>
      <Card.Title style={{fontSize : '25px'}}>{props.nameSinger}</Card.Title>
      <Card.Text className='mt-2 mb-2 p-2' style={{fontSize : '18px'}} >
       <CiLocationOn /> {props.location} _
       <MdDateRange /> {props.date}
      </Card.Text>
      <Card.Text style={{fontSize : '18px'}}>
        برای اطلاعات بیشتر و خرید بلیت کلیک کنید
      </Card.Text>
    <Link to={`/buyTicket/${props.id}`} className='btnbuyticket mt-3' >خرید بلیت</Link>
    </Card.Body>
  </Card>
    </Link>
  )
}
