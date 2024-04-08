import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form, Table } from 'react-bootstrap'
import { MdOutlinePayment } from "react-icons/md";
import { useNavigate , useParams } from 'react-router-dom';
import './Login.css'
import datasConsert from '../../datasConsert';





export default function Login(prop) {
    const [chairs, setChairs] = useState([])
    const [name, setName] = useState('')
    const [number, setnumber] = useState('')
    const [email, setEmail] = useState('')
    const [resultprice , setresultPrice] = useState(0)
    const [datas, Setdatas] = useState([])
    
    let param = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        let findArray = datasConsert.tehran.find(data => data.id == param.id)
        Setdatas(findArray)
    })

    useEffect(() => {
        let array = Object.entries(prop)
        let arraypush = []
        array.forEach((data) => {
            arraypush.push(data[1].id)
        })
        setChairs(arraypush)
        setresultPrice(arraypush.length * 350000)
    }, [])

    // const submitHandler = (e) => {
    //  e.preventDefault()
    //  if(name , number , email) {
    //      let newobj = {
    //         name,
    //         number,
    //         email,
    //         chairs,
    //         resultprice,
    //         nameSinger : datas.nameSinger,
    //         location : datas. location,
    //         date : datas.date,
    //         time : datas.time,
    //         day : datas.day,
    //         peigiriNumber : Math.floor(Math.random() * 99999999999)
    //      }
    //      fetch(`https://login-90002-default-rtdb.firebaseio.com/users.json` , {
    //         method : 'POST',
    //         body : JSON.stringify(newobj)
    //      })
    //  }
    //  navigate('/reservation')
    // }
    return (
        <>
            <Row className='g-3'>
                <Col xs={12} xl={4}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>نام و خانوادگی</Form.Label>
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> تلفن همراه </Form.Label>
                            <Form.Control value={number} onChange={(e) => setnumber(e.target.value)} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> Email </Form.Label>
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                        </Form.Group>
                        <Button type="submit">
                            پرداخت <MdOutlinePayment />
                        </Button>
                    </Form>
                </Col>
                <Col xs={12} xl={6}>
                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th>ردیف</th>
                                <th>شماره صندلی</th>
                                <th> قیمت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chairs.map((data, index) => (
                                <tr key={data}>
                                    <td>{index + 1}</td>
                                    <td>{data}</td>
                                    <td>350,000</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Col>
                <Col  xs={12} xl={2}>
                <Table striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <th>مجموع قیمت</th>
                        </tr>
                    </thead>
                    <tbody>
                     <tr>
                        <td>{resultprice}</td>
                     </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
        </>
    )
}
