import React from 'react'


const Profile = () => {
  return (
    <div className='container'>
        <div className='nav'>
            <h1 className='account'>Account Settings</h1>
        </div>
        <div className='flex'>
          <div>
          <img  className='pfp' width={76} height={76} src='/0f002c5c-ea93-4e1e-82eb-53850809a86d.png'></img>
          <img width={21} height={23} className='cam' src='/8356c290-7498-4543-adec-d8e2359af443.png'></img>


          </div>
       
        <div>
        <p className='name'>Marry Doe</p>
        <p className='gmail'>Marry@Gmail.com</p>
      
        </div>

       
           
        </div>
        <p className='account-text'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>

        
    </div>
  )
}

export default Profile