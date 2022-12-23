import axios from 'axios';
import React, { useState } from 'react'
import { FaPaw, FaCameraRetro } from 'react-icons/fa';

export const Register = () => {
  const [petName, setPetName] = useState('');
  const [petPhoto, setPetPhoto] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petBirth, setPetBirth] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petSpayed, setPetSpayed] = useState('');
  const [petWeigth, setPetWeigth] = useState('');


  async function handleData(e) {

		const response = await axios
			.post('http://localhost:3001/project',
				{
					name: petName,
					image: petPhoto,
					breed: petBreed,
					birthday: petBirth,
          gender: petGender,
          Spayed: petSpayed,
          weigth: petWeigth

				}, // body
				// {
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 		authorization: 'nknag5oilfk'
				// 	}
				// }
			);

      console.log(response);

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

      <div className='right-container'>
        <header>
          <h1>Yay, puppies! Ensure your pup gets the best care!</h1>
        </header>
        <div className='set'>
          <div className='pets-name'>
            <label for='pets-name'>Name</label>
            <input id='pets-name' placeholder="Pet's name" type='text'/>
          </div>
          <div className='pets-photo'>
            <button id='pets-upload'>
              <i className='fas fa-camera-retro'><FaCameraRetro/></i>
            </button>
            <label for='pets-upload'>Upload a photo</label>
          </div>
        </div>
        <div className='set'>
          <div className='pets-breed'>
            <label for='pets-breed'>Breed</label>
            <input id='pets-breed' placeholder="Pet's breed" type='text'/>
          </div>
          <div className='pets-birthday'>
            <label for='pets-birthday'>Birthday</label>
            <input id='pets-birthday' placeholder='MM/DD/YYYY' type='text'/>
          </div>
        </div>
        <div className='set'>
          <div className='pets-gender'>
            <label for='pet-gender-female'>Gender</label>
            <div className='radio-container'>
              <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
              <label for='pet-gender-female'>Female</label>
              <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
              <label for='pet-gender-male'>Male</label>
            </div>
          </div>
          <div className='pets-spayed-neutered'>
            <label for='pet-spayed'>Spayed or Neutered</label>
            <div className='radio-container'>
              <input checked='' id='pet-spayed' name='spayed-neutered' type='radio' value='spayed'/>
              <label for='pet-spayed'>Spayed</label>
              <input id='pet-neutered' name='spayed-neutered' type='radio' value='neutered'/>
              <label for='pet-neutered'>Neutered</label>
            </div>
          </div>
        </div>
          <div className='pets-weight'>
            <label for='pet-weight-0-25'>Weight</label>
            <div className='radio-container'>
              <input checked='' id='pet-weight-0-25' name='pet-weight' type='radio' value='0-25'/>
              <label for='pet-weight-0-25'>0-25 lbs</label>
              <input id='pet-weight-25-50' name='pet-weight' type='radio' value='25-50'/>
              <label for='pet-weight-25-50'>25-50 lbs</label>
              <input id='pet-weight-50-100' name='pet-weight' type='radio' value='50-100'/>
              <label for='pet-weight-50-100'>50-100 lbs</label>
              <input id='pet-weight-100-plus' name='pet-weight' type='radio' value='100+'/>
              <label for='pet-weight-100-plus'>100+ lbs</label>
            </div>
          </div>

        <footer>
          <div className='container-button'>
            <button id='back'>Back</button>
            <button id='next'>Next</button>
          </div>
        </footer>
      </div>
      
    </div>
  )
}
