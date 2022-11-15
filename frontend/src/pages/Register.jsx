import React from 'react'
import { FaPaw, FaCameraRetro } from 'react-icons/fa';

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
        <div className='form-container'>
        <h1 className='form-text-header'>
          Yay, puppies! Ensure your pup gets the best care!
        </h1>
        
        <form>
          <div className='name-div'>
            <div className='pet-name-div'>
              <span>Name</span>
              <input
                placeholder='Pets name'
                type="text"
                // value={}
                onChange={ () => {}}
                />
              </div>
              <div className='photo-div'>
                <span className='span-icon'>< FaCameraRetro /></span>
                <input
                placeholder='Insert some url'
                type="text"
                // value={}
                onChange={ () => {}}
                />
              </div>
      

          </div>
          
          <div>
          <label> Breed
            <input
            placeholder='Pets breed'
            type="text"
            // value={}
            onChange={ () => {}}
            />
          </label>

          <label> Birthday
            <input
            placeholder='MM/DD/YYYY'
            type="date"
            // value={}
            onChange={ () => {}}
            />
          </label>
          </div>
          <div>
          <label htmlFor='gender'> Gender
            <input
            id='gender'
            type="radio"
            name='male'
            value="male"
            // onChange={ () => {}}
            />
            <input id='gender' type="radio" />
          </label>
          <label htmlFor='gender'> Spayed or Neutered
            <input type="radio" name="" id="" />
          </label>
          </div>

          <div>
          <label htmlFor='weight'> Weight
            <input
            id='weight'
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
          </div>

          
        </form>
        </div>
        
        <footer>
          <button type="button" className='send-button'>Send</button>
        </footer>
      </section>
      
    </div>
  )
}
