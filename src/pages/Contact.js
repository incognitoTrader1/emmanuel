// src/Contact.js 
import React, { useState } from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

const Contact = () => { 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_8ddscka',  
            'template_9aagvq3', 
            formData,
            'yvMnjnruK2elZsMCS'
        ).then(
            (result) => {
                console.log('Email successfully sent!', result.text);
            },
            (error) => {
                console.log('Failed to send email.', error.text);
            }
        );
    };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Page",
    "url": window.location.href,
    "description": "some text",
    "author": {
      "@type": "Organization",
      "name": "My Website"
    }
  }; 

  return (  
    <div>
      <Helmet>
       <meta name="description" content="some text" />
       <meta name="keywords" content="some text" />
       <meta property="og:description" content="some text" />
       <meta property="og:url" content={window.location.href} />
       <title>Contact | Example Site</title>
       <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Contact page content */}
      <section className='contact'>
       <div className='contact-main-bg'>
        <div className='contact-main'>
          <div className='contact-header'>
            <h1>Get In Touch</h1> 
            <p>I’m always interested in hearing about new projects and opportunities.</p>
          </div> 

          <div className='contact-contents'>
           <div className='contact-contents-header'>
              <h3>Let's talk about everything!</h3>
              <p>Don't like forms? Send me an email. 👋</p>
           </div>
 
           <div className='contact-contents-main'> 
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input type="text" name='name' placeholder="Your Name" style={{ flex: 1 }} 
                value={formData.name} 
                onChange={handleChange} />
                <input type="email" name='email' placeholder="Your Email" style={{ flex: 1 }}
                value={formData.email} 
                onChange={handleChange} />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <input type="text" name='subject' placeholder="Subject" style={{ width: '100%' }}
                value={formData.subject} 
                onChange={handleChange} />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <textarea placeholder="Message" name='message' style={{ width: '100%', height: '100px' }}
                value={formData.message} 
                onChange={handleChange}></textarea>
              </div>

              <button type="submit" style={{ width: '150px' }}>Submit</button>
            </form> 
           </div>  
          </div> 

          <div id='contact-socials' className='contact-contents-socials flexbox-prop'  style={{marginTop: "50px"}}>
           <div className='contact-contents-header'>
              <h4>Reach out on social media!</h4> 
           </div>
 
           <div className='contact-contents-socails'> 
             <div>
              <div>
                <img src={`/images/socials/youtube.png`} alt='youtube logo' />
                <p>Youtube</p>
              </div>
              <div>
                <img src={`/images/socials/twitter.png`} alt='twitter logo' />
                <p>Twitter</p>
              </div>
              <div>
                <img src={`/images/socials/instagram.png`} alt='instagram logo' />
                <p>Instagram</p>
              </div>
              <div>
                <img src={`/images/socials/telegram.png`} alt='Telegram logo' />
                <p>Telegram</p>
              </div>
              <div> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github logo' />
                <p>Github</p>
              </div>
             </div>
           </div>  
          </div> 
        </div>  
       </div>  
      </section>
    </div>
  );
};

export default Contact;
