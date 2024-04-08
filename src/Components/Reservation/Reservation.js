import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Reservation() {
    const [shomarePeigiri, setShomarepeigiri] = useState(0)
    useEffect(() => {
        fetch(`https://login-90002-default-rtdb.firebaseio.com/users.json`)
            .then(res => res.json())
            .then((data) => {
                let array = Object.entries(data)
                 setShomarepeigiri(array[array.length - 1][1].peigiriNumber)
            })

    }, [])
    return (
        <>
                {shomarePeigiri ? (
            <Container className='text-center mt-4 mb-4'>
                    <h4>بلیت شما با موفقیت ثبت شد</h4>
                    <p>شماره پیگیری : {shomarePeigiri} </p>
                    <p>لطفا شماره پیگیری را ذخیره کنید</p>
            </Container>

                ) : (
                    <Container className='text-center mt-4  mb-4'>
                        <h4>Wait...</h4>
                    </Container>
                )}

        </>
    )
}
