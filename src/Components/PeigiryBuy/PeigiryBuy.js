import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Row, Table, Col } from 'react-bootstrap'
import './peigiryBuy.css'
import { TiTick } from "react-icons/ti";


export default function PeigiryBuy() {
    const [peigiri, setPeigiri] = useState('')
    const [datas, setDatas] = useState([])
    const [datasEntekhabi, setDatasEntekhabi] = useState([])
    const [showMoshkhasat, setShowMoshakhasat] = useState(false)

    useEffect(() => {
        fetch(`https://login-90002-default-rtdb.firebaseio.com/users.json`)
            .then(res => res.json())
            .then((data) => {
                let array = Object.entries(data)
                setDatas(array)
            })

    }, [])


    const submitHandler = (e) => {
        e.preventDefault()
            datas.forEach((data) => {
                if (data[1].peigiriNumber == peigiri) {
                    setDatasEntekhabi(data[1])
                    setShowMoshakhasat(true)
                }
            })
        setPeigiri('')
    }


    return (
        <Container className=' text-center mt-5 mb-5'>
            <Row>
                <Form className='FormChallenge' onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> شماره پیگیری</Form.Label>
                        <Form.Control value={peigiri} onChange={(e) => setPeigiri(e.target.value)} type="text" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        تایید<TiTick />
                    </Button>
                </Form>
            </Row>
            {showMoshkhasat ? (
                <Row className='mt-2'>

                    <h4 className='mt-3 mb-3' >مشخصات بلیط شما :</h4>

                    <Col xs={12} sm ={6} md={4} xl={3}>
                        <p className='moshakhsat'>نام و نام خانوادگی  : {datasEntekhabi.name}</p>
                    </Col>
                    <Col xs={12} sm ={6} md={4} xl={3}>
                        <p className='moshakhsat'>شماره همراه : {datasEntekhabi.number}</p>
                    </Col>
                    <Col xs={12} sm ={6} md={4} xl={3}>
                        <p className='moshakhsat'> Email    : {datasEntekhabi.email}</p>
                    </Col>
                    <Col xs={12} sm ={6} md={4} xl={3}>
                        <p className='moshakhsat'>نام  خواننده  : {datasEntekhabi.nameSinger}</p>
                    </Col>
                    <Col xs={12} sm ={6} md={4} xl={3}>
                        <p className='moshakhsat'> محل برگزاری: {datasEntekhabi.location}</p>
                    </Col>
                    <Col xs={12} sm ={6} md={4} xl={3}>
                        <p className='moshakhsat'> تاریخ    : {datasEntekhabi.date}</p>
                    </Col>
                    <Col xs={12} sm ={6} md={4} xl={3}>
                        <p className='moshakhsat'>   روز  : {datasEntekhabi.day}</p>
                    </Col>
                    <Col xs={12} sm ={6} md={4} xl={3}>
                        <p className='moshakhsat'> ساعت    : {datasEntekhabi.time}</p>
                    </Col>
                    <Col xs={12} sm ={6} md={4} xl={3}>
                        <p className='moshakhsat'> مجموع قیمت    : {datasEntekhabi.resultprice}</p>
                    </Col>
                        {datasEntekhabi.chairs.map((chair, index) => (
                    <Col key={chair} xs={12} sm ={6} md={4} xl={3}>
                            <p className='moshakhsat' >جایگاه شماره {index + 1}  : صندلی {chair}</p>
                    </Col>
                        ))}

                </Row>
            ) : (
                <Row className='mt-4'>
                    <h4>چیزی یافت نشد</h4>
                </Row>
            )}
        </Container>
    )
}
