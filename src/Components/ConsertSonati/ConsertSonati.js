import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import datasConsert from '../../datasConsert'
import DataAll from '../../DataAll'

export default function ConsertSonati() {

    const [datas , setDatas] = useState(datasConsert)

  return (
    <>
    <h3 className='text-center mt-4'>کنسرت‌های سنتی،کلاسیک و تلفیقی تهران</h3>
    <Container className='mt-3 mb-4'>
      <Row className='g-3 containeritems'>
        {datas.sonati.map((data) => (
        <Col key={data.id} xs= {12} md= {6} xxl = {4}>
        <DataAll  {...data} />
        </Col>
        ))}
      </Row>
    </Container>
  </>
  )
}
