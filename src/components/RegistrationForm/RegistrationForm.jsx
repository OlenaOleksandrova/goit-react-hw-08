import React from 'react'
import s from './RegistrationForm.module.css'

const RegistrationForm = () => {
  return (
    <div className={s.wrapper}>
      <h2>Registration</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
              <Form className={s.form}>
          <Field name='name' placeholder='Enter your name' />
          <Field name='email' placeholder='Enter email' />
          <Field name='password' type='password' placeholder='Enter password' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
  
}

export default RegistrationForm