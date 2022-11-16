import React, { useState } from 'react'
import { FaPaw, FaCameraRetro } from 'react-icons/fa';

export const Register = () => {
  const [petName, setPetName] = useState('');
  const [petPhoto, setPetPhoto] = useState('');
  const [petBreed, setPetBreed] =useState('');


  async function handleData(e) {

    console.log(petName);
    console.log('entrei');

		// const response = await axios
		// 	.post('http://localhost:3001/project',
		// 		{
		// 			name: projectName,
		// 			description: projectDesc,
		// 			requirements: projectReq,
		// 			id_module: projectModule
		// 		}, // body
		// 		{
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 				authorization: 'nknag5oilfk'
		// 			}
		// 		}
		// 	);

		// setResponse(response.data.id);
		// alert(`Projeto ${response.data.id} registrado com sucesso!}`)
	}


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
              <input className='input'
               placeholder='Pets name'
               value={petName}
               type="text"
               onChange={(e)=> setPetName(e.target.value)}/>
            </div>
            <div className='photo-div'>
              <span className='span-icon'>< FaCameraRetro /></span>
              <input placeholder='Insert some url'
                value={petPhoto}
               type="text"
               onChange={(e)=> setPetPhoto(e.target.value)}/>
            </div>
          </div>
          
          <div className='breed-div'>
            <div className='pet-breed-div'>
              <span>Breed</span>
              <input className='input' placeholder='Pets breed'
                value={petBreed}
               type="text"
               onChange={ (e) => setPetBreed(e.target.value)}/>
            </div>
            <div className='birth-div'>
              <span>Birthday</span>
            <input
            className='input'
            type="date"
            onChange={ () => {}}
            />
            </div>
          </div>

          <div className='gender-div'>
            <div className='pet-gender-div'>
              <span>Gender</span>
              <div className='radio-gender-container'>
                <label htmlFor='female' className='input-gender'>Female
                <input id='female' type="radio" name='gender' onChange={ () => {}}/>
                </label>
                <label htmlFor='male' className='input-gender'>Male
                <input id='male' type="radio" name='gender' />
                </label>
                
              </div>
            </div>
            <div>
              <span>Spayed or Neutered</span>
              <label htmlFor='spayed'>
              <input type="radio" name='spayed' onChange={ () => {}}/>
              <input type="radio" name='spayed' />
              </label>
            </div>
          </div>

          <div>
            <span>Weigth</span>
            <input type="radio" name='weigth' onChange={ () => {}}/>
            <input type="radio" name='weigth' />
            <input type="radio" name='weigth' onChange={ () => {}}/>
            <input type="radio" name='weigth' />
          </div>
        </form>
        </div>
        
        <footer>
          <button type="button" className='send-button' onClick={ handleData}>Send</button>
        </footer>
      </section>
      
    </div>
  )
}
