import React from 'react'
import { FaPaw } from 'react-icons/fa';

export const Register = () => {
  return (
    <div className='signup-container'>
      <section className='left-container'>
        <h1>< FaPaw /> PUPASSURE</h1>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png" alt="pet" />
      </section>

      <section className='right-container'>
        <h1>
          Yay, puppies! Ensure your pup gets the best care!
        </h1>

        <form>
          <label> Name
            <input
            placeholder='Pets name'
            type="text"
            // value={}
            onChange={ () => {}}
            />
          </label>

          <label> Breed
            <input
            placeholder='Pets breed'
            type="text"
            // value={}
            onChange={ () => {}}
            />
          </label>

          <label htmlFor='gender'> Gender
            <input
            id='gender'
            type="radio"
            name='male'
            value="male"
            // onChange={ () => {}}
            />
            <input
            id='gender'
            type="radio"
            />
            
          </label>
        </form>
      </section>
    </div>
  )
}
