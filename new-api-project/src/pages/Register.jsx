import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import { Container } from 'react-bootstrap'



export default function Register() {
  return (
    <Container className='d-flex align-items-center justify-content-center'>
        <RegistrationForm />
    </Container>
  )
}
