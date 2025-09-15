import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "727990cf-1551-4f49-9611-2c7d5de973b5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <div className='contact'>
            <div className="contact-col">
                <div className="header">
                    <h4>Send us a message</h4>
                    <img src={msg_icon} alt="" />
                </div>
                <p>
                    Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>

                <ul>
                    <li> <img src={mail_icon} alt=""  /> abdkhan2309@gmail.com</li>
                    <li><img src={phone_icon} alt=""  />+1 123-456-7890</li>
                    <li><img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge<br/>
                        MA 02139, United States</li>
                </ul>

                
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit} >
                    <label>Your Name</label>
                    <input name='name' type="text" placeholder='Enter your Name' required  />
                    <label>Phone Number</label>
                    <input name='phone' type="tel" placeholder='Enter your Mobile Number' required />
                    <label>Your Email</label>
                    <input name='email' type="text" placeholder='Enter your email id' required />
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6"></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
            <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact