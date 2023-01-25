import React from 'react'
import { Formik, Field, Form } from "formik";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import './Add.scss'
function Add() {
  const nav = useNavigate();
  return (
    <div className='add'>
        <Formik
        initialValues={{ image: "", category: "" , name: "" , price: "" , }}
        onSubmit={async (values) => {
            await axios.post('http://localhost:4000/', {
                image: values.image,
                category: values.category,
                name: values.name,
                price: values.price,
            })
            nav('/')
        }}
      >
        <Form>
          <Field name="image" type="text" />
          <Field name="category" type="text" />
          <Field name="name" type="text" />
          <Field name="price" type="text" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Add