import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './contact.css'

function Contact() {
  return (
    <div className='mg-20'>
      {/* Contact information */}

      <div className='address'>
        <div>
        <i className='fa fa-home'></i>
        </div>
        <div className='lf-md'>
          <h6>Address</h6>
          <p>No 100 Side Hustle Capstone</p>
        </div>
      </div>

      <div className='address'>
        <div>
        <i className='fa fa-phone'></i>
        </div>
        <div className='lf-md'>
          <h6>Call us</h6>
          <p>No 100 Side Hustle Capstone</p>
        </div>
      </div>

      <div className='address'>
        <div>
        <i className='fa fa-envelope'></i>
        </div>
        <div className='lf-md'>
          <h6>Email us </h6>
          <p>group100@sidehustlecapstone.ng</p>
        </div>
      </div>

      {/* form heading */}
      <div>
      <h2> Get in touch with us</h2>
        <p> We are available 24/7 bt fax, e-mail or by phone. You can also use our quick contact form to reach us!</p>
      </div>

      {/* form information */}
      <div>
        <form action='/'>

          <div className = 'input-control'>
            <label>Full Name</label>
            <input placeholder='Enter your name' type={'text'} />
          </div>

          <div className = 'input-control'>
            <label>Email</label>
           <input placeholder='Enter your email' type={'email'} />
          </div>

          <div className = 'input-control'>
            <label>Subject</label>
           <input type={'text'} />
          </div>

          <div className = 'input-control'>
            <label>Message</label>
            <textarea></textarea>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact