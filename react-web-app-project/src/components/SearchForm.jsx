import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { fetchLocationData, locationUpdated } from './LocationSlice';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
    const [name, setName] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();
        if (name === '') {
            alert('Please enter your destination city')
        } else {
            dispatch(locationUpdated(name));
            dispatch(fetchLocationData(name));
            navigate('/search2')
            
            
        }
    }

  return (
    <div style={{
        backgroundColor: 'rgba(73, 181, 203, 0.5)',
        margin: '5vh auto',
        width: '50vw',
        padding: '5vh 10vw',
        borderRadius: '30%'
    }}>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Search Destinations</Form.Label>
            <InputGroup size='lg'>
                <Form.Control     
                    type='text'
                    value={name}
                    placeholder='Enter A Destination'
                    onChange={(e) => setName(e.target.value)}>
                </Form.Control>
                <Button type='submit'>Search</Button>
            </InputGroup>
        </Form.Group>
        </Form>
    </div>
  )
}
