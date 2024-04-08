import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

import './ChairdData.css'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import SabtNam from './SabtNam';
import { TiTick } from "react-icons/ti";
import Login from './Login';

export default function ChairdData() {
    const [chairs, setchairs] = useState([])
    const [result, setresult] = useState(0)
    const [sabtSefaresh, setSabtsefaresh] = useState([])
    const [showSabt, setShowsabt] = useState(false)
    const [showLogin , setShowLogin] = useState(false)



    useEffect(() => {
        let oldchairs = []
        for (let i = 1; i <= 55; i++) {
            let object = { id: i, tick: false, score: 0 }
            oldchairs.push(object)
        }
        setchairs(oldchairs)
    }, [])

    useEffect(() => {
        let neaarray = [...chairs]
        let result = 0
        neaarray.forEach((data) => {
            if (data.score) {
                result += data.score
            }
        })
        setresult(result)

    }, [chairs])


    const clickHandler = (id) => {
        let arraychair = [...chairs]
        arraychair.forEach((data) => {
            if (result < 10) {
                if (data.id === id) {
                    data.tick = !data.tick
                    if (!data.score) {
                        data.score = 1
                    } else {
                        data.score = 0
                    }
                }
            } else {
                data.score = 0
                data.tick = false
            }
        })
        setchairs(arraychair)
    }

    const sabtHandler = () => {
        let newarray = [...chairs]
        let pusharray = []
        newarray.forEach((data) => {
            if (data.tick) {
                pusharray.push(data)
            }
        })
        setSabtsefaresh(pusharray)
        setShowsabt(true)
    }

    const taeedHandler = () => {
       setShowLogin(true)
    }


    return (
        <>
            {!showSabt ? (
                <Container className='divcontainerchair mt-5'>
                    <Row className='containerchair g-2'>
                        {chairs.map((data) => (
                            <Col onClick={() => clickHandler(data.id)} xs={2} className={`containerchairCol ${data.tick ? 'visiable' : ''}`} key={data.id}>
                                <span>{data.id}</span>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                    {result == 10 ? (
                        <p className='text-center mt-3'>لطفا بیشتر از 10 تا انتخاب نکنید چون انتخابتان از بین میرود </p>
                    ) : (
                        ''
                    )}
                    </Row>
                    <Row>
            <p onClick={sabtHandler} className='text-center mt-4 sabtsefaresh'><FiShoppingCart /> ثبت سفارش</p>

                    </Row>
                </Container>
            ) : (
                <Container>
                    <p className='text-center mt-3'>برای بازگشت به انتخاب صندلی دوبار روی گزینه بالا کلیک کنید</p>
                    {!showLogin && (
                <Row className='d-flex justify-content-center'>
                <p className='text-center mt-2'>صندلی های مورد نظری که شما قصد خرید آنها را دارید</p>
                {sabtSefaresh.map((data) => (
                    <Col  key={data.id} xs ={2} sm = {1} >
                    <SabtNam {...data} />
                    </Col>
                ))}
                <Col xs ={12} className='d-flex justify-content-center'>
                <span className='text-center mt-4 sabtsefaresh' onClick={taeedHandler}>تایید <TiTick /></span>
                </Col>
                </Row>
                    ) }
                {showLogin && (
                 <Login {...sabtSefaresh} />
                ) }
            </Container>
        )}


        </>
    )
}
