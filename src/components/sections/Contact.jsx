import React, { useState } from 'react'
import emailjs from "emailjs-com"


function Contact() {
  const [formData, setFormData ] = useState({
    name: "",
    email: " ",
    message: ""
  })

  
  

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(import.meta.env.SERVICE_ID, import.meta.env.TEMPLATE_ID, e.target, import.meta.env.PUBLIC_KEY)
    .then((result) => {
      alert("message sent!")
      setFormData({name: "", email: "", message: ""})

    })
    .catch(()=> alert("oops, something went wrong!"))
  }
  return (
    <section id='contact'
    className='min-h-screen flex items-center justify-center py-20' >

<div className='max-w-5xl mx-auto px-4'>



      <div className='px-4 w-150 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2x_8px_rgba(59,130,246,0.2)] transition'>

        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text text-transparent text-center'>Get in Touch</h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='relative'>
            <input type='text' 
            id ="name" 
            name= "name" 
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData,name : e.target.value})}
            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none  focus:border-blue-500 focus:bg-blue-500/5'
            placeholder='Name...' />
          </div>

          <div className='relative'>
            <input type='email' 
            id ="email" 
            name= "email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData,email: e.target.value})}
            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none  focus:border-blue-500 focus:bg-blue-500/5'
            placeholder='example@gmail.com' />
          </div>

          <div className='relative'>
            <textarea
             id ="message" 
             name= "message" 
             required
             value={formData.message}
             onChange={(e) => setFormData({...formData,message : e.target.value})}
             rows={5}
            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none  focus:border-blue-500 focus:bg-blue-500/5'
            placeholder='Your message...' />
          </div>

          <button type='submit'

          className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative  overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]' > Submit </button>

        </form>
      </div>
      </div>
       </section>
  )
}

export default Contact