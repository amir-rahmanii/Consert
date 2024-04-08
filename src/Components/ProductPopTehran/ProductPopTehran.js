import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import datasConsert from '../../datasConsert'
import DataAll from '../../DataAll'

export default function ProductPopTehran() {

  const [datas , setDatas] = useState(datasConsert)
  return (
    <>
      <h3 className='text-center mt-4'>کنسرت‌های پاپ تهران</h3>
      <Container className='mt-4 mb-4'>
        <Row className='g-3 containeritems'>
          {datas.tehran.map((data) => (
          <Col key={data.id} xs= {12} md= {6} xxl = {4}>
          <DataAll  {...data} />
          </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
