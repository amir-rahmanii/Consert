import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Footer.css'
import { FaTelegram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Container className='containerFooter mt-3' fluid>
      <div>
      <p className='text-secondary'>ساخته شده توسط امیررضا رحمانی  </p>
      <RiWhatsappFill style={{fontSize : '55px' , cursor : 'pointer' , marginLeft : '10px'}} />
      <FaTelegram style={{fontSize : '55px' , cursor : 'pointer' , marginLeft : '10px'}} />
      <FaInstagramSquare style={{fontSize : '55px' , cursor : 'pointer' , marginLeft : '10px'}} />
      </div>
      <div>
      <Image style={{cursor : 'pointer'}} src="/images/logo.png" fluid />
      </div>
    </Container>
  )
}
