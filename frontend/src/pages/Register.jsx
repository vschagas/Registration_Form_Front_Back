import React from 'react'
import { FaPaw } from 'react-icons/fa';

export const Register = () => {
  return (
    <div className='signup-container'>
      <section className='left-container'>
        <div className='header-container'>
          <h1 className='icon'>< FaPaw /></h1>
          <h1>PET'S SURE</h1>
        </div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png" alt="pet" />
      </section>

      <section className='right-container'>
        <h1 className='form-text-header'>
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
