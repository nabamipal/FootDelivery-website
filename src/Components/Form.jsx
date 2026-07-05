import React from 'react'

function Form() {
  return (
    <div className='min-h-screen flex item-center justify-center bg-gray-400 px-4'>
      <div>
        <h1>sign Up</h1>
        <p>Create your Account and get started today</p>

        <Form>
          <input type="text" placeholder='First Name' />
          <input type='text' placeholder='Last Name'/>
          <input type='password' placeholder='Enter password'/>
          <input type='tel' placeholder='Enter your ph no'/>
          <p> By creating an account, you agree to our{" "}
            <a>Term</a>{" "}&{" "}
            <a>Privacy policy</a>.
          </p>
          <button type='submit'>Sign Up</button>
        </Form>
      </div>
    </div>
  )
}

export default Form
